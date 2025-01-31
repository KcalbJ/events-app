"use client"
import { Button } from "./ui/button"
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import checkoutOrder from "@/lib/actions/order";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout({event, user}) {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, []);

    const onCheckout = async () => {
        const order = {
            eventName: event.name as string,
            eventId: event.id as string,
            price: event.price as string,
            isFree: event.isFree as boolean,
            buyerId: user.id  as string
        }
        await checkoutOrder({order})
    }
    
    return (
        <form  action={onCheckout} >
            <Button type="submit" role="checkout">
              {event.isFree ? 'Sign up' : 'Checkout'}  
            </Button>
        </form>
    )
}

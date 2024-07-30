"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Stripe from 'stripe'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default async function checkoutOrder({ order }) {
    const price = order.isFree ? 0 : Number(order.price)* 100
   try{ 
    const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
                currency: 'gbp',
                unit_amount: price,
                product_data: {
                    name: order.eventName
                }
          },
          quantity:1
        },
        ],
        metadata:{
            eventId: order.eventId,
            buyerId: order.buyerId,
        },
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/events`,
        cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      });
      redirect(session.url!);
    } catch (error) {
    throw error;
  }
}

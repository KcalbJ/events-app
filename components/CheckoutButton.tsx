
import Checkout from "./Checkout"
import SignInButton from "./SignInButton"




export default function CheckoutButton({event, user}) {


    const finished = new Date(event.endDateTime)< new Date()
    return (
        <div>
            
            {finished ?  (<p className="text-red-400">Event has finished</p>): <>
            {user ? <Checkout user={user} event={event}/>: <SignInButton/>}</>}
        </div>
    )
}

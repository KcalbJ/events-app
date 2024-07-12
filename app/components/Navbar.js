
import Link from 'next/link'
function Navbar() {
  return (
    <header className="border-b-4 w-screen border-black py-2 justify-center ">
    <div className="container flex items-center justify-between mx-auto h-14 px-4 sm:px-6">
    <Link  href="/">
        <h1 className="font-bold ">EVENTII</h1>
        
      </Link>
      <nav className=" gap-4 text-xs md:text-lg font-medium flex">
        <Link className="" href="/beans">
          BEANS
        </Link>
        <Link className="" href="/espresso">
          ESPRESSO
        </Link>
        <Link className="" href="/equipment">
          EQUIPMENT
        </Link>
        <Link className="" href="/subscriptions">
          SUBSCRIPTIONS
        </Link>
      </nav>
      
    
    </div>
  </header>
  )
}
export default Navbar
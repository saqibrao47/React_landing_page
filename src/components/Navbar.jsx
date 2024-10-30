import logo from "../assets/logo.png";
import { navItems } from "../constants";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 m-auto relative text-sm">
            <div className="flex items-center justify-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">B_Dubai</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 ">


                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
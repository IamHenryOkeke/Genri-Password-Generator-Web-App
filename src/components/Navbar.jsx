import Logo from "../assets/images/Logo.png"
import {ReactComponent as MenuOpenIcon} from "../assets/svg/menuOpen.svg";
import {ReactComponent as MenuCloseIcon} from "../assets/svg/menuClose.svg";

import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="mx-4 md:mx-8 lg:mx-32">
        <div className="flex flex-row pt-10 justify-between items-center">
            <div className="logo-container flex justify-between w-full md:w-1/2">
                <a href="">
                    <img src={Logo} alt=""/>
                </a>
            </div>
            <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer lg:hidden md:w-8 md:h-8 '>
                {navbar ? <MenuCloseIcon/> : <MenuOpenIcon/>}
            </div>
            <ul className="hidden lg:flex lg:gap-10 w-full lg:w-auto text-lg">
                <li>
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Home
                    </a>
                </li>
                <li>
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Recents
                    </a>
                </li>
                <li>
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Saved Password
                    </a>
                </li>
                <li>
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
        <div className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-4 bg-indigo-1000 mt-3 rounded-xl`}>
            <ul className='flex flex-col items-center gap-5'>
                <li className="navbar-item">
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Home
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Recent Password
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Saved Password
                    </a>
                </li>
                <li className="navbar-item">
                    <a className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Contact Us
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar;

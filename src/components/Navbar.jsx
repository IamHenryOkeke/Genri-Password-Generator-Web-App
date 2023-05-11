import Logo from "../assets/images/Logo.png"
import {ReactComponent as MenuOpenIcon} from "../assets/svg/menuOpen.svg";
import {ReactComponent as MenuCloseIcon} from "../assets/svg/menuClose.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="mx-4 md:mx-8 lg:mx-32 font-body">
        <div className="flex flex-row pt-10 justify-between items-center">
            <div className="logo-container flex justify-between w-full md:w-1/2">
                <Link to="/Genri-Password-Generator-Web-App">
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer lg:hidden md:w-8 md:h-8 '>
                {navbar ? <MenuCloseIcon/> : <MenuOpenIcon/>}
            </div>
            <ul className="hidden lg:flex lg:gap-10 w-full lg:w-auto text-lg">
                <li>
                    <Link to="/Genri-Password-Generator-Web-App" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Recents
                    </Link>
                </li>
                <li>
                    <Link to="/Genri-Password-Generator-Web-App/Saved-Password" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Saved Passwords
                    </Link>
                </li>
                <li>
                    <Link to="/Genri-Password-Generator-Web-App/Contact-Us" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
        <div className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-4 bg-indigo-1000 mt-3 rounded-xl`}>
            <ul className='flex flex-col items-center gap-5'>
                <li className="navbar-item">
                    <Link to="/Genri-Password-Generator-Web-App/" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Recents
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/Genri-Password-Generator-Web-App/Saved-Password" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Saved Passwords
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/Genri-Password-Generator-Web-App/Contact-Us" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    
  )
}

export default Navbar;

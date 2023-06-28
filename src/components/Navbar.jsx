import Logo from "../assets/images/Logo.png"
import { ReactComponent as MenuOpenIcon } from "../assets/svg/menuOpen.svg";
import { ReactComponent as MenuCloseIcon } from "../assets/svg/menuClose.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [navbar, setNavbar] = useState(false);
  const [userStatus, setUserStatus] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            const uid = user.uid;
            setUserStatus(uid);
            console.log(user)
        } else {
            // User is signed out
            setUserStatus(null);
            console.log("user is logged out");
        }
    })
    setNavbar(false)
  }, [])
  return (
    <nav className="mx-4 md:mx-8 lg:mx-32 font-body">
        <div className="flex flex-row pt-10 justify-between items-center">
            <div className="logo-container flex justify-between w-full md:w-1/2">
                <Link to="/">
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer lg:hidden md:w-8 md:h-8 '>
                {navbar ? <MenuCloseIcon/> : <MenuOpenIcon/>}
            </div>
            <ul className="hidden lg:flex lg:gap-10 w-full lg:w-auto text-lg">
                <li>
                    <Link to="/" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Recents
                    </Link>
                </li>
                {
                    userStatus &&  <li>
                        <Link to="/Saved-Password" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                            Saved Passwords
                        </Link>
                    </li>
                }
               
                <li>
                    <Link to="/Contact-Us" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Contact Us
                    </Link>
                </li>
            </ul>
            <div className="hidden lg:block text-lg">
                {
                    (location.pathname !== "/signup" && location.pathname !== "/login") ? (
                        <div>
                            {
                                userStatus ? (
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => {
                                                signOut(auth).then(() => {
                                                    console.log("Signed out successfully")
                                                    navigate("/")
                                                }).catch((err) => {
                                                    console.log(err)
                                                })
                                            }}
                                            className="md:px-8 md:py-2 bg-indigo-950 rounded-md text-white"
                                        >
                                            Log out
                                        </button>  
                                    </div>
                                ) : (
                                    <div className="flex gap-3">
                                        <Link to="/login">
                                            <button
                                                className="md:px-8 md:py-2 bg-indigo-950 rounded-md text-white"
                                            >
                                                Log In
                                            </button>
                                        </Link>
                                        <Link to="/signup">
                                            <button
                                                className="md:px-8 md:py-2 bg-indigo-950 rounded-md text-white"
                                            >
                                                Sign Up
                                            </button>
                                        </Link>
                                    </div>
                                )
                            }                             
                        </div>
                        
                    ) : (location.pathname === "/signup") ? (
                            <Link to="/login">
                                <button
                                    className="md:px-8 md:py-2 bg-indigo-950 rounded-md text-white"
                                >
                                    Log In
                                </button>
                            </Link>
                    ) : (location.pathname === "/login") ? (
                        <Link to="/signup">
                                <button
                                    className="md:px-8 md:py-2 bg-indigo-950 rounded-md text-white"
                                >
                                    Sign Up
                                </button>
                        </Link>
                    ) : (
                        <></>
                    )
                }
                    
            </div>
        </div>
        <div className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-4 bg-indigo-1000 mt-3 rounded-xl`}>
            <ul className='flex flex-col items-center gap-5'>
                <li className="navbar-item">
                    <Link to="/" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Recents
                    </Link>
                </li>
                {
                    userStatus &&  <li className="navbar-item">
                        <Link to="/Saved-Password" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                            Saved Passwords
                        </Link>
                    </li>
                }
                <li className="navbar-item">
                    <Link to="/Contact-Us" className="transition-all ease-in-out delay-300 hover:border-b-4 hover:border-indigo-950 duration-300" href="">
                        Contact Us
                    </Link>
                </li>
            </ul>
            <div>
                {
                    (location.pathname !== "/signup" && location.pathname !== "/login") ? (
                        <div>
                            {
                                userStatus ? (
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => {
                                                signOut(auth).then(() => {
                                                    console.log("Signed out successfully")
                                                    navigate("/")
                                                }).catch((err) => {
                                                    console.log(err)
                                                })
                                            }}
                                            className="px-4 py-2 bg-indigo-950 rounded-md text-white"
                                        >
                                            Log out
                                        </button>  
                                    </div>
                                ) : (
                                    <div className="flex gap-3">
                                        <Link to="/login">
                                            <button
                                                className="px-4 py-2 bg-indigo-950 rounded-md text-white"
                                            >
                                                Log In
                                            </button>
                                        </Link>
                                        <Link to="/signup">
                                            <button
                                                className="px-4 py-2 bg-indigo-950 rounded-md text-white"
                                            >
                                                Sign Up
                                            </button>
                                        </Link>
                                    </div>
                                )
                            }                             
                        </div>
                        
                    ) : (location.pathname === "/signup") ? (
                            <Link to="/login">
                                <button
                                    className="px-4 py-2 bg-indigo-950 rounded-md text-white"
                                >
                                    Log In
                                </button>
                            </Link>
                    ) : (location.pathname === "/login") ? (
                        <Link to="/signup">
                                <button
                                    className="px-4 py-2 bg-indigo-950 rounded-md text-white"
                                >
                                    Sign Up
                                </button>
                        </Link>
                    ) : (
                        <></>
                    )
                }
                    
            </div>
        </div>

    </nav>
    
  )
}

export default Navbar;

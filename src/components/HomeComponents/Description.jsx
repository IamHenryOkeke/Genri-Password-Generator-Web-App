import { Link } from "react-router-dom"
import Logo from "../../assets/images/Logo.png"

const Description = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-32 pt-7 grid grid-cols-2">
      <div className=" pr-4 md:pr-8">
        <div className="text-base">
          <img src={Logo} alt="" />
        </div>
        <p className="text-justify text-[14px] md:text-base lg:text-2xl">
        Strong password is essential to keep your accounts and personal information safe. Use Genri to create a unique and secure password that will help protect your online identity
        </p>
      </div>
      <div className="w-full">
        <p className="short-links mb-3">short links</p>
        <div>
          <ul className="text-[14px] md:text-base lg:text-2xl">
            <li className="border-b-4 border-neutral-950">
                <Link to="/Genri-Password-Generator-Web-App" className="text-indigo-950 pb-1 hover:text-neutral-600">
                    Home
                </Link>
            </li>
            <li className="border-b-4 border-neutral-950">
                <Link to="" className="text-indigo-950 pb-1 hover:text-neutral-600" href="">
                    About The Team
                </Link>
            </li>
            <li className="border-b-4 border-neutral-950">
                <Link to="/Genri-Password-Generator-Web-App/Contact-Us" className="text-indigo-950 pb-1 hover:text-neutral-600" href="">
                    Contact Us
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Description

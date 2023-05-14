import { Link } from "react-router-dom"
import Hero_Image from "../../assets/images/Hero_Image.png"

const Hero = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-32 flex flex-col-reverse md:flex md:flex-row md:items-center">
      <div className="flex flex-col items-center md:flex md:w-[490px] md:flex-col md:gap-2 md:items-start">
        <div className="flex items-start gap-1 md:hidden">
          <h1 className="font-semibold text-indigo-950 italic">
            Genri
          </h1>
          <p>generates the hard-to-get and easy-to-remember password for you</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <h1
            className="hidden md:block md:text-2xl lg:text-[40px] lg:leading-[56px] md:font-semibold"
          >
            Generate the hard-to-get and easy-to-remember password
          </h1>
          <p className="hidden md:block lg:text-xl lg:font-medium lg:leading-5">
          Strong password is essential to keep your accounts and personal information safe. Use Genri to create a unique and secure password that will help protect your online identity
          </p>
          <a href="#Generate-Password">
            <button
              className="hidden md:block md:font-medium md:text-sm md:px-8 md:py-2 bg-indigo-950 rounded-md text-white hover:bg-indigo-1000"
            >
                Generate
            </button>
          </a>
          
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:mx-auto">
        <img
          className="w-full mx-auto"
          src={Hero_Image}
          alt=""
        />
      </div>
    </div>

  )
}

export default Hero

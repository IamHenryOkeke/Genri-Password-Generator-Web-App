import Logo from "../../assets/images/Logo.png"

const Description = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-32 pt-7 grid grid-cols-2">
      <div className=" pr-4 md:pr-8">
        <div className="text-base">
          <img src={Logo} alt="" />
        </div>
        <p className="text-justify text-[14px] md:text-base lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          consequatur sequi aut minima accusantium, quos a nesciunt vel
          voluptatum velit dolorem quia delectus sint earum voluptates excepturi
          optio fugit ullam!
        </p>
      </div>
      <div className="w-full">
        <p className="short-links mb-3">short links</p>
        <div>
          <ul className="text-[14px] md:text-base lg:text-2xl">
            <li className="border-b-4 border-neutral-950">
                <a className="text-indigo-950 pb-1 hover:text-neutral-600" href="">
                    Home
                </a>
            </li>
            <li className="border-b-4 border-neutral-950">
                <a className="text-indigo-950 pb-1 hover:text-neutral-600" href="">
                    About Us
                </a>
            </li>
            <li className="border-b-4 border-neutral-950">
                <a className="text-indigo-950 pb-1 hover:text-neutral-600" href="">
                    Our Team
                </a>
            </li>
            <li className="border-b-4 border-neutral-950">
                <a className="text-indigo-950 pb-1 hover:text-neutral-600" href="">
                    Contact Us
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Description

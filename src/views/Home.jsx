import Description from "../components/HomeComponents/Description"
import HeroSection from "../components/HomeComponents/HeroSection"
import GeneratePasswordSection from "../components/HomeComponents/GeneratePasswordSection"

const Home = () => {
  return (
    <div  className="font-body">
      <HeroSection/>
      <GeneratePasswordSection/>
      <Description/>
    </div>
  )
}

export default Home

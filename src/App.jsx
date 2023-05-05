import GeneratePasswordSection from "./components/GeneratePasswordSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Description from "./components/Description"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="font-body">
      <Navbar/>
      <HeroSection/>
      <GeneratePasswordSection/>
      <Description/>
      <Footer/>
    </div>
  )
}

export default App

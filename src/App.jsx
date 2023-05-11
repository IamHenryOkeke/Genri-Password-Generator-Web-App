import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./views/Home"
import Contact from "./views/ContactUs"
import SavedPassword from "./views/SavedPassword"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Genri-Password-Generator-Web-App/" element={<Home/>} >
        </Route>
        <Route path="/Genri-Password-Generator-Web-App/Saved-Password" element={<SavedPassword/>} >
        </Route>
        <Route path="/Genri-Password-Generator-Web-App/Contact-Us" element={<Contact/>} >
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

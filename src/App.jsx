import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./views/Home"
import Contact from "./views/ContactUs"
import SavedPassword from "./views/SavedPassword"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./views/SignUp"
import LogIn from "./views/LogIn"


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} >
        </Route>
        <Route path="/Saved-Password" element={<SavedPassword/>} >
        </Route>
        <Route path="/Contact-Us" element={<Contact/>} >
        </Route>
        <Route path="/login" element={<LogIn/>} >
        </Route>
        <Route path="/signup" element={<SignUp/>} >
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

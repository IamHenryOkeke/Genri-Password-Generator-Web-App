import Description from "../components/HomeComponents/Description";
import HeroSection from "../components/HomeComponents/HeroSection";
import GeneratePasswordSection from "../components/HomeComponents/GeneratePasswordSection";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Home = () => {
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            setUserStatus(user);
        } else {
            // User is signed out
            setUserStatus(null);
        }
    })
  }, [])
  return (
    <div className="font-body">
      {
        userStatus && <p className="mx-4 md:mx-8 lg:mx-32 text-xl md:text-4xl font-semibold mt-4">
          Welcome{" "}
          {userStatus.displayName}{" "}
          &#128075;
        </p>
      }
      <HeroSection/>
      <GeneratePasswordSection/>
      <Description/>
    </div>
  )
}

export default Home

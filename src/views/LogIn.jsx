import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

const LogIn = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleOnCheck = () => {
        let psw = document.getElementById("password");
        (psw.type === "password") ?
            (psw.type = "text") :
            (psw.type = "password")
    }

    const handleRequest = async () => {
        await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    }

    const handleOnSubmit = async (e) => {
      e.preventDefault()
      if(!formData.email || !formData.password){
        alert('Please fill all the fields')
      }else{
        console.log(formData)
        handleRequest()
      }
    }

    return (
        <main>                     
            <h1 className='text-center text-lg font-medium my-3'>Log in to your account</h1>  
            <div className="bg-indigo-950 text-white mt-4 rounded-xl md:rounded-none py-4 mx-4 md:mx-0">
            <form className='flex flex-col items-center justify-center md:gap-5 gap-3'>                                                                                            
                    <div className='flex flex-col items-center gap-3 w-full md:w-[80%]'>
                        <label htmlFor="email-address" className='font-medium'>
                            Email address
                        </label>
                        <input
                            className='border-2 border-black rounded-md p-2 bg-neutral-1000 text-black w-[50%]'
                            type='email'
                            name="email"
                            value={formData.email}
                            onChange={handleOnChange}                                
                            placeholder="Email address"
                            required                                      
                        />
                    </div>

                    <div className='flex flex-col items-center gap-3 w-full md:w-[80%]'>
                        <label htmlFor="password" className='font-medium'>
                            Password
                        </label>
                        <input
                            className='border-2 border-black rounded-md p-2 bg-neutral-1000 text-black w-[50%]'
                            type="password"
                            id = "password"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChange}                                
                            placeholder="Password" 
                            required               
                        />
                    </div> 
                    <div>
                        <label htmlFor="">
                            <input className='mr-2' type="checkbox" onChange={handleOnCheck}/>  
                            Show Password?
                        </label>                                     
                    </div>                                             
                            
                    <button
                        className="hidden md:block md:font-medium md:text-sm md:px-8 md:py-2 bg-indigo-1000 rounded-md text-white"
                        type="submit" 
                        onClick={handleOnSubmit}                        
                    >  
                        Log In                               
                    </button>
                                                                        
                </form>   
                    
                <p className='text-center mt-4'>
                    No account yet?
                    <NavLink className= "underline hover:no-underline ml-2" to="/signup" >
                        Sign in
                    </NavLink>
                </p>  
            </div>                                                                          
                                
        </main>
    )
}

export default LogIn

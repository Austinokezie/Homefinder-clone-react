import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default function ForgotPassword() {

  const[email, setEmail,] = useState("");
  
  function onchange(e){
    setEmail(e.target.value);
  }

  // onsubmit func is going to bne async because the send password reset email method from firebase auth returns a promise
  async function onsubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      toast.success("Email was sent");


    } catch (error) {
      toast.error("Could not send reset password");
    }

  }
  
    return(
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold">ForgotPassword</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto"> 
         <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://media.istockphoto.com/id/482308235/photo/hand-holds-a-key.jpg?s=612x612&w=0&k=20&c=kkKrKnB7ZxKkmvRQZ0-0WqIE-6-CUayU0pOqk9JMPgE=" alt="key" className="w-full rounded-xl"></img>

         </div>
         <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-8 sm:w-auto ">
          <form onSubmit={onsubmit}>
            <input className="  sm:w-full w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-slate-50 border-gray-300 rounded transition ease-in-out " type="email" id="email" value={email} onChange={onchange} placeholder="Email address"></input>
          
            <div className="flex justify-between whitespace-nowrap text-sm  sm:text-lg">
              <p className="mb-6">Don't have an account?
               <NavLink to="/Signup" className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out ml-1" >Register</NavLink>
              </p>
              <p>
                <NavLink to="/Sign" className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out ml-1" >Sign In</NavLink>
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 " type="submit">Send reset password</button>
            <div className=" flex items-center my-4 text-center before:border-t  before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300">
            <p className=" 
              font-sm text-sm font-bold mx-4">OR</p>
            </div>
            <OAuth/>
          </form>
          
         </div>

        </div>
        
      </section>
      
     )
    }

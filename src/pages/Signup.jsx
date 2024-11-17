import React, { useState } from "react"
import { AiFillEyeInvisible,  AiFillEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp } from "firebase/firestore";
// import { setDoc } from "firebase/firestore/lite";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function SignUp() {
  const [showPassword,setShowPassword] = useState(false);
  const[formData, setFormData] =useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password} = formData;
  const navigate = useNavigate()
  function onchange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
   async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential =await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser,{
        displayName: name
      })
      const user = userCredential.user
      const formDataCopy ={...formData}
      delete formData.password
      formDataCopy.timestamp = serverTimestamp();
      toast.success("Successful");

      // await setDoc(doc(db, "users", user.uid), formDataCopy)
      navigate("/");
    } catch (error) {
     toast.error("Something went wrong with the registration")
    }

  }
     return(
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto"> 
         <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img src="https://media.istockphoto.com/id/482308235/photo/hand-holds-a-key.jpg?s=612x612&w=0&k=20&c=kkKrKnB7ZxKkmvRQZ0-0WqIE-6-CUayU0pOqk9JMPgE=" alt="key" className="w-full rounded-xl"></img>

         </div>
         <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-8 sm:w-auto  ">
          <form onSubmit={onSubmit} >
            <input className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-slate-50 border-gray-300 rounded transition ease-in-out " type="text" id="name" value={name} onChange={onchange} placeholder="Full name"></input>
            <input className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-slate-50 border-gray-300 rounded transition ease-in-out " type="email" id="email" value={email} onChange={onchange} placeholder="Email address"></input>
            <div className="relative mb-6">
              <input className="w-full  sm:w-auto lg:w-full px-4 py-2 text-xl text-gray-700 bg-slate-50 border-gray-300 rounded transition ease-in-out " type={showPassword ? "text" : "password"} id="password" value={password} onChange={onchange} placeholder="Password"></input>
              {showPassword ? (
              < AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={()=>setShowPassword((prevState) => !prevState)}
              />
               ):(
                 < AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() =>setShowPassword((prevState) => !prevState)}/>
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm  sm:text-lg">
              <p className="mb-6"> Have an account?
               <NavLink to="/Sign" className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out ml-1" >SignIn</NavLink>
              </p>
              <p>
                <NavLink to="/ForgotPassword" className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out ml-1" >Forget password?</NavLink>
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 " type="submit">Sign Up</button>
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

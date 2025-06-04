import React from 'react'
import { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router';

export default function Profile() {
  const auth = getAuth();

 
   // initialize the useNavigate hook
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const {name, email} = formData;

  // Create a function to use the signout btn to sign out the current user profile
  function onLogout (){

    // using the auth signout funtionality
    auth.signOut();

    //  using the useNavigate hook to navigate the signed out person back to the home page
    navigate("/");
  }
  return (
    <>
     <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>
        My Profile
      </h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          {/* {name Input} */}
          <input type='text' id='name' value={name} disabled  className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white
          border-gray-300 rounded transition ease-in-out'
          />

          {/* {Email Input} */}

          <input type='email' id='email' value={email} disabled  className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white
          border-gray-300 rounded transition ease-in-out'
          />
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
            <p className='flex items-center '>
              Do you want to change your name?
              <span className='text-red-500 hover:text-red-600 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span>
            </p>
            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 cursor-pointer transition ease-in-out duration-200'>Sign Out</p>
          </div>
        </form>
      </div>
     </section>
    </>
  )
}

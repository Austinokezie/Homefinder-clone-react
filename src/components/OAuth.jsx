import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore'

import React from 'react'
import {FcGoogle} from "react-icons/fc"
import { toast } from 'react-toastify'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
  const navigate = useNavigate()
  async function onGoogleClick(){
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      // check for the user
      const docRef = doc(db, "users", user.uid)
      // get the user
      const docSnap = await getDoc(docRef)

      // To check if it's available or not
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          Timestamp: serverTimestamp(),
        });
      }
      toast.success("Successful");
      navigate("/");

      
    } catch (error) {
      toast.error("Could not verify with google")
      

    }

  }
  return (
    <button type="button" onClick={onGoogleClick} className='flex items-center justify-center w-full bg-red-600 text-white py-3 px-7 rounded capitalize hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out '> <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
      Continue with Google
    </button>
  )
}

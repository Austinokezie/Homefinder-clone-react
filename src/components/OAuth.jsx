import React from 'react'
import {FcGoogle} from "react-icons/fc"

export default function OAuth() {
  return (
    <button className='  flex items-center justify-center w-full bg-red-600 text-white py-3 px-7 rounded capitalize hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out '> <FcGoogle className='text-2xl bg-white rounded-full mr-2'/>
      Continue with Google
    </button>
  )
}

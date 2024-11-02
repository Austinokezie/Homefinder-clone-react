import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  function pathMathRoute(Route){
    if(Route === location.pathname){
      return true
    }
  }

  return (
    <div className='bg-slate-50 border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' alt='logo' className='h-5 cursor-pointer'onClick={()=>navigate("/")}></img>
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li className='py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer  ${pathMathRoute("/") && "text-black border-b-red-500"}' onClick={()=>navigate("/")}>Home</li>
                <li className='py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/") && "text-black border-b-red-500"}' onClick={()=>navigate("/Offers")} >Offers</li>
                <li className='py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${pathMathRoute("/") && "text-black border-b-red-500"}' onClick={()=>navigate("/Signin")} >Sign in</li>

            </ul>
        </div>
      </header>
    </div>
  )
}

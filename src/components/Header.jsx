import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Header() {
  
  const [pageState, setPageState] = useState("Sign");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if (user){
        setPageState("Profile");

      }else{
        setPageState("Sign");
      }
    });
  }, [auth]);
  function pathMatchRoute(Route){
    if(Route === location.pathname){
      return true
    }
  }

  return (
    <div className='bg-slate-50 border-b shadow-sm sticky top-0 z-40'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <img src='https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg' alt='logo' className='h-5 cursor-pointer'onClick={()=>navigate("/")}></img>
        </div>
        <div>
            <ul className='flex space-x-10'>
              <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}`} onClick={()=> navigate("/")}>Home</li>

              <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/Offers") && "text-black border-b-red-500"}`} onClick={()=> navigate("/Offers")}>Offers</li>

              <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/Sign") || pathMatchRoute("/Profile"))  && "text-black border-b-red-500"}`} onClick={()=> navigate("/Profile")}> {pageState}  </li>

            </ul>
        </div>
      </header>
    </div>
  )
}

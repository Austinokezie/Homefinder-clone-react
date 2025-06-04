import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

export function useAuthStatus() {
    // Added two hooks using useState
    const [loggedIn, setloggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    // useEffect to ask firebase if the person is authenticated or not

    useEffect(()=>{
       const auth = getAuth()
       onAuthStateChanged(auth, (user)=>{
        // check if the person is authenticated
        if(user){
            setloggedIn(true)
        }
        setCheckingStatus(false)
       })
    }, [])


  return {loggedIn, checkingStatus}
}

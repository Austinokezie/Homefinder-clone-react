import react, {createContext, usestate, useEffect } from 'react';
import { useContext } from 'react';


const AuthContext = react.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function Authprovider({ children}) {
    const [currentUser, setCurrentUser] = usestate();
    const [loading, setLoading] = usestate(true);

    useEffect(() =>{
        const unsubcribe = auth.onAuthStateChanged((user)=> {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubcribe;
    }, []);
    return(
        <AuthContext.Provider value={{currentUser}}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
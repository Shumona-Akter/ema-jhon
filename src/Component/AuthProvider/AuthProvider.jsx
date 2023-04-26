import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)
    const signup = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }

    const signIn = (email, password )=>{
        return signInWithEmailAndPassword (auth, email, password)
        setLoading(true)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    // observer in the auth state
    const unsubscribe = useEffect(()=>{
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        // stop observing
        return ()=>{
            return unsubscribe
        }
    },[])
    
    const authInfo = {
        user,
        signup,
        signIn,
        setUser,
        logOut,
        loading,
        setLoading
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
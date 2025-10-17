import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { useEffect } from 'react';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth ,email , password)
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth ,email , password)
    }
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
            console.log('use');
            setLoading(false)
        }) 
        return () =>{
            unSubscribe()
        }
    },[])
    const AuthInfo ={
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext value={AuthInfo}>
   {children}
        </AuthContext>
    );
};

export default AuthProvider;
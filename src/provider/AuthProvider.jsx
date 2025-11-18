import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    //create user with mail
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // updateUser 
    const updateUser =(object)=>{
        return updateProfile(auth.currentUser,object);
    }
    // signOutUser
    const signOutUser = ()=>{
        return signOut(auth);
    }
    // signInUser
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // verifyUser
    const verifyUser = ()=>{
        return sendEmailVerification(auth.currentUser);
    }
    // sign in with Google
    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider);
    }
    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            
        });
        return ()=>{unsubscribe();}
    },[])

    // all info
    const authInfo = {
       user,
       setUser,
       loading,
       setLoading,
       createUser,
       updateUser,
       signOutUser,
       signInUser,
       verifyUser,
       googleSignIn
    }
    return (
       <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;
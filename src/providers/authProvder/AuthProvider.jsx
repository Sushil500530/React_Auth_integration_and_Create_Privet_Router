import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../components/firebase/firebase.confiq";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContex = createContext(null) ;

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true) ; //reload er smoy khuje pay na bole ata declare kora hoyeche....
        return createUserWithEmailAndPassword(auth, email, password) ;
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password) ;
    }

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true) ;
       return signOut(auth) ;
    }

    // observe of state changes
    useEffect(() => { //logout na howa porjonta ai state ta dhore rakhtece
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser);
            setLoading(false);
            setUser(currentUser) ;
            // if (currentUser) {
            //     setUser(currentUser)
            //     console.log('observing current user inside useEffect of AuthProvider', currentUser);
            // }
        })
        return () => {
            unSubscribe()
        }
    }, [])


 // createUser dewar main karon hocche j kono jayga theke j kew access korte parbe...
    const authInfo = {loading, user,createUser,signInUser,logOut,signInWithGoogle}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;
/***
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the Auth provider in the main.jsx file 
 * 4. access children in the AuthProvider component as children and use it in the middle of the provider
 * 
 * 
 */
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../components/firebase/firebase.confiq";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{ //logout na howa porjonta ai state ta dhore rakhtece
       const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
                console.log('observing current user inside useEffect of AuthProvider', currentUser);
            }
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const authInfo = { user, createUser, signInUser } // createUser dewar main karon hocche j kono jayga theke j kew access korte parbe...
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
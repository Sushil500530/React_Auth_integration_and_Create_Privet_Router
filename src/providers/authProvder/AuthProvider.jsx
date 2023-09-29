import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../components/firebase/firebase.confiq";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null) ;
     

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {user,createUser} // createUser dewar main karon hocche j kono jayga theke j kew access korte parbe...
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
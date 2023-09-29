import { createContext } from "react";
import PropTypes from 'prop-types';


export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
    const authInfo = {
        name:'nodi sagor khal bill'
    }
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
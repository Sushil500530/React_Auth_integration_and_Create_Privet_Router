//pete vitore kichu thakbe,,,and user thakle atar moddhe jaite dibe..uer na thakle jaite dibe na...seta korar jonno 

import { useContext } from "react";
import { AuthContex } from "../providers/authProvder/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRouts = ({children}) => {
    // user er information age pete hobe 
    const {user,loading} = useContext(AuthContex)
    if(loading){
       
        return  <div className="text-center text-8xl text-green-500 "><span className="loading loading-spinner loading-lg"></span></div>;
    }
   if (user) {
    return children ;
   }
    return <Navigate to="/login"></Navigate>
};

export default PrivetRouts;
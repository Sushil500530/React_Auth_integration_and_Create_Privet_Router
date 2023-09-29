import { useContext } from "react";
import { AuthContex } from "../../providers/authProvder/AuthProvider";


const SubHome = () => {
    const authInfo = useContext(AuthContex) ;
    console.log(authInfo);
    return (
        <div>
            <h2 className="text-3xl text-center">This is Home: {authInfo.name}</h2>
        </div>
    );
};

export default SubHome;
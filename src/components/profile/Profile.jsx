import { useContext } from "react";
import { AuthContex } from "../../providers/authProvder/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContex) ;
    console.log(user);
    return (
        <div>
            <h3 className="text-3xl text-center font-bold my-5">Your Personal Profile</h3>
            <div className="mt-8">
                <h4>Name:{user.displayName}</h4>
                <h4>Email: {user.email}</h4>
                <h4>Email Verified: {user.emailVerified}</h4>
                <div className="flex gap-8">photo: <div className="w-36 h-36 rounded-full"><img src={user.photoURL} alt="image" className="w-full h-full rounded-full" /></div> </div>
                <h4>Phone Number: {user.phoneNumber}</h4>
            </div>
        </div>
    );
};

export default Profile;
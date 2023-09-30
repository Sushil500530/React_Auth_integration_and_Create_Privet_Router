import { useContext } from "react";
import { AuthContex } from "../../providers/authProvder/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContex);
    console.log(user);
    return (
        <div>

            <h3 className="text-3xl text-center font-bold my-5">Your Personal Profile</h3>
            <div className="mt-8 text-xl font-bold">
                <div className="flex gap-8"><div className="w-36 h-36"><img src={user.photoURL} alt="image" className="w-full h-full rounded-full" /></div> </div>
                <h4>Name:{user.displayName}</h4>
                <h4>Email: {user.email}</h4>
                <h4 className="flex gap-2">Email Verified: {user.emailVerified ? <p>True</p> : <p>False</p>}</h4>

                <h4 className="flex gap-3">Phone Number:  {user.phoneNumber ? user.phoneNumber : <p>not found</p>}</h4>
                <h3>Sign in Creation Time: {user.metadata.creationTime}</h3>
                <h3>Last Sign in Time: {user.metadata.lastSignInTime}</h3>
            </div>
        </div>
    );
};

export default Profile;
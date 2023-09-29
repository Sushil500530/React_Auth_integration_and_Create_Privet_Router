import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../providers/authProvder/AuthProvider";

const Resister = () => {

    const {createUser} = useContext(AuthContex)

    const handleResisterSubmit = (e) => {
        e.preventDefault() ;
        const name = e.target.name.value ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        // console.log(name,email,password);
       
        
         //create user in firebase
        
         createUser(email,password)
         .then(result =>{
            console.log(result.user);
         })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Resister now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleResisterSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name"  placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success text-xl capitalize">Resister</button>
                                </div>
                            </form>
                            <p>Already have an account?
                            <Link to="/login">
                                <button className="mx-1 text-blue-600 hover:underline">Please Login</button>
                            </Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resister;
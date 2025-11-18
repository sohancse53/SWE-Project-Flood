import { sendPasswordResetEmail } from "firebase/auth";
import React, { use } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../provider/AuthContext";

const ForgetPassword = () => {
  const { state } = useLocation();
  const {user} = use(AuthContext);

   if(user){
    return <Navigate to='/'></Navigate>
  }
  
//   console.log(state);
  const handleForgetPassword = (event)=>{
    event.preventDefault();
   const email = event.target.email.value;
   console.log(email);
   sendPasswordResetEmail(auth, email)
  .then(() => {
    alert(`Password Reset mail has been send to ${email}`)
    window.open("https://mail.google.com", "_blank");
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    
  }

  return (
    <div className="hero bg-base-200 min-h-[80vh]">
      <title>Forget Password</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleForgetPassword} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
              defaultValue={state}
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />

              <button className="btn btn-neutral mt-4">Reset</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

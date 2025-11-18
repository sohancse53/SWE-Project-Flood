import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link, Navigate } from "react-router";

const Register = () => {
  const [error, setError] = useState("");
  const {user, createUser, setUser, updateUser, signOutUser ,verifyUser,googleSignIn} = use(AuthContext);

   if(user){
    return <Navigate to='/'></Navigate>
  }
 

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const photoURL = event.target.photo.value;
    const password = event.target.password.value;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    const hasMinLength = /.{6,}/.test(password);
    setError("");
    if (!upperCase) {
      setError("Must have at least one uppercase letter");
      return;
    }
    if (!lowerCase) {
      setError("Must have at least one lowercase letter");
      return;
    }
    if (!hasMinLength) {
      setError("Length must be at least 6 characters");
      return;
    }
    // console.log(displayName,email,photoURL,password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({ displayName, photoURL })
          .then(() => {
            verifyUser().then(()=>alert(`verification email send to your email ${email}`)).catch(e=>console.log(e.message)
            )
            setUser({ ...user, displayName, photoURL });
            signOutUser()
              .then(() => {
                console.log("Sign-out successful");
              })
              .catch((e) => {
                console.log(e.message);
              });
          })
          .catch((e) => {
            console.log(e.message);
          });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };


     const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result=>{
        setUser(result.user);
        console.log(result.user);
        
    })
    .catch(e=>{
        console.log(e.message);
        
    })
  }

  return (
    <div className="hero bg-base-200 min-h-[80vh]">
         <title>Register</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                required
                name="name"
                type="name"
                className="input"
                placeholder="Name"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* photo */}
              <label className="label">Photo URL</label>
              <input
                required
                name="photo"
                type="text"
                className="input"
                placeholder="Photo url"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                required
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <p className="text-red-500">{error && error}</p>
          
              <button className="btn btn-neutral mt-4">Login</button>
              <div className="flex justify-between items-center">
                <div className="w-[45%] border opacity-50"></div>
                <p className="mx-5 text-slate-600">OR</p>
                <div className="w-[45%] border opacity-50"></div>
              </div>
              {/* google login button */}
              <button onClick={handleGoogleSignIn} type="button" className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="text-lg">
                Already Have an Account{" "}
                <Link className="text-blue-400 font-bold" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

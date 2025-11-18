import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const UpdateProfile = () => {
  const { updateUser,user,setUser } = use(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateUser({ displayName, photoURL })
   .then(()=>{
    setUser({...user,displayName,photoURL})
    alert("Your profile have been Update");
   })
   .catch(er=>{
    alert(er.message);
   })

  };
  return (
    <div className="hero bg-base-200 min-h-[80vh]">
      <title>Update Profile</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleUpdateProfile} className="card-body">
            <h1 className="text-4xl font-bold text-center">Update Information</h1>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                required
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />

              {/* photo */}
              <label className="label">Profile Photo</label>
              <input
                required
                name="photo"
                type="text"
                className="input"
                placeholder="Photo url"
              />

              <button className="btn btn-success text-white mt-4">Update Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

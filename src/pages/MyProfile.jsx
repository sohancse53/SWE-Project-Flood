import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Edit3, Mail, User } from "lucide-react";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="min-h-[80vh] flex items-center justify-center   p-6">
      <title>My profile</title>
      <div className="w-full max-w-md bg-white border border-slate-200 shadow-lg rounded-2xl p-8 text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-slate-100 shadow-sm"
          />
        </div>

        {/* Name  */}
        <h2 className="text-2xl font-bold text-slate-800">
          {user?.displayName}
        </h2>

        {/* Email */}
        <p className="mt-4 text-slate-600 flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 text-slate-400" /> {user?.email}
        </p>

        {/* Update Button */}
        <Link to="/updateprofile"
          
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-all shadow-md"
        >
          <Edit3 className="w-4 h-4" />
          <span>Update Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;

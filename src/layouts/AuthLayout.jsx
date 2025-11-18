import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthContext";

const AuthLayout = () => {
  const {user} = use(AuthContext);
   if(user){
    return <Navigate to='/'></Navigate>
  }
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;

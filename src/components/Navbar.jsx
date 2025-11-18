import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
import { AuthContext } from '../provider/AuthContext';
import logo from '../assets/logo.png'

import DateTime from './DateTime';
const Navbar = () => {
    const {user,signOutUser} = use(AuthContext);
    const handleSignOut = ()=>{
        signOutUser().then(() => {
        toast('Sign-out successful');
        
       })
        .catch(e=>{
                console.log(e.message);
                
            })
        
    }
    const links = <>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/disasters">Disasters</NavLink></li>
                       
                      {!user && 
                        <>
                          <li><NavLink to="/auth/login">LogIn</NavLink></li>
                        <li><NavLink to="/auth/register">Registration</NavLink></li>
                        </>
                      }
                  </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-0 md:px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div>
      <Link to="/" className="  cursor-pointer"><img className='w-16 h-16 rounded-full shadow' src={logo} alt={logo} /></Link>
     <DateTime/>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="navbar-end space-x-5">
    <Link to="/myprofile"><img className='border-3 rounded-full border-blue-500 w-12 h-12' src={user?user.photoURL:userLogo} alt="" /></Link>
    {
        user ? <button onClick={handleSignOut} type='button' className='btn btn-secondary rounded-full'>Log Out</button>
        :<Link  to={"/auth/login"} className='btn btn-neutral rounded-full'>Log-In</Link>

    }
  </div>
</div>
    );
};

export default Navbar;
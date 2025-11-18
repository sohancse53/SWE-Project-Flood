import React, { Children, use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location.pathName);
    
    const {user,loading} = use(AuthContext);
    if(loading){
        return <LoadingSpinner/>
    }
 if(!user){
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
 }
 return children;
};

export default PrivateRoute;
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Error from "../components/Error";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";
import PrivateRoute from "./PrivateRoute";
import LoadingSpinner from "../components/LoadingSpinner";
import Disasters from "../pages/Disasters";
import DisasterDetails from "../pages/DisasterDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                
              
            },
            {
                path:'/about',
                element:<h1 className="text-center mt-12 text-4xl">Comming soon</h1>,
               
            },
            {
                path:'/disasters',
                element:<Disasters/>,
                loader:()=>fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=50'),
                   hydrateFallbackElement:<LoadingSpinner></LoadingSpinner>,
               
            },
            {
                path:'/disasters-details/:DisasterId',
                element:<DisasterDetails/>,
                
            },
            {
                path:'/myprofile',
                element:<PrivateRoute>
                    <MyProfile/>
                </PrivateRoute>
            },
            {
                path:'/updateprofile',
                element:<PrivateRoute>
                    <UpdateProfile/>
                </PrivateRoute>
            }
            ,
            {
                path:'/gameDetails/:id',
                element:<PrivateRoute>
                    <GameDetails/>
                </PrivateRoute>,
                loader:()=>fetch("/disaster.json"),
                hydrateFallbackElement:<LoadingSpinner></LoadingSpinner>
            }
        ]
    },

   {
    path:'/auth',
    element:<AuthLayout/>,
    children:[
         {
        path:'/auth/register',
        element:<Register/>
    },
    {
        path:'/auth/login',
        element:<Login/>
    },
    {
        path:'/auth/forgetpassword',
        element:<ForgetPassword/>
    },
   
    ]
   }

])

export default  router
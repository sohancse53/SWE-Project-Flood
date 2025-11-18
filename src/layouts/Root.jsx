import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[80vh] w-11/12 mx-auto'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;
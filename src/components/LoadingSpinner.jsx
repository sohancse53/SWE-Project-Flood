import React from 'react';
import { RotateLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='h-60 flex justify-center items-center'>
            <RotateLoader color="blue" />
        </div>
    );
};

export default LoadingSpinner;
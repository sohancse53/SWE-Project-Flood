import { format } from 'date-fns';
import React from 'react';

const DateTime = () => {
    const data = format(new Date(),"EEEE MMM dd");
    console.log(data);
    
    return (
        <div className='md:text-lg  font-bold text-blue-800 '>
            {
                data
            }
        </div>
    );
};

export default DateTime;
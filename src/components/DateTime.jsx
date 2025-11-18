import { format } from 'date-fns';
import React from 'react';

const DateTime = () => {
    const data = format(new Date(),"EEEE MMM dd");
    console.log(data);
    
    return (
        <div className='text-lg md:text-2xl font-semibold text-accent '>
            {
                data
            }
        </div>
    );
};

export default DateTime;
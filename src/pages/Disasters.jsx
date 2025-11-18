import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import DisasterCard from '../components/DisasterCard';

const Disasters = () => {
    const [loading,setLoading] = useState(false);
  const data = useLoaderData();
  const events = data.events;


  return (
   <div>
    <h1 className='text-4xl text-primary font-bold text-center my-10'>All Disasters</h1>
   <div className='overflow-y-scroll h-[60vh]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
     {
        events.map(event=> <DisasterCard event={event}
        />)
    }
   </div>
   </div>
  );
};

export default Disasters;

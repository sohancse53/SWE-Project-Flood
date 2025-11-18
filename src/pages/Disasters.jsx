import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import DisasterCard from '../components/DisasterCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Disasters = () => {
    const [loading,setLoading] = useState(false);
  const data = useLoaderData();
  const events = data.events;
//   console.log(events[0]);
  
    const sorted = events.sort((a,b)=>{
        return a.geometries[0].date - b.geometries[0].date;
    })
    console.log(sorted)

  return (
   <div>
    <h1 className='text-4xl text-primary font-bold text-center my-10'>All Disasters</h1>
  {
    loading ? <LoadingSpinner/>
    :
     <div className='overflow-y-scroll h-[60vh]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
     {
        sorted.map(event=> <DisasterCard event={event}
        />)
    }
   </div>
  }
   </div>
  );
};

export default Disasters;

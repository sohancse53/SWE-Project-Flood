import React from "react";
import  { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import DisasterCard from "../components/DisasterCard";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const RecentDisasters = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=9&status=open&sort=-date"
    )
      .then((res) => res.json())
      .then((data) => setEvents(data.events || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  return (
    <div className="my-10 flex justify-center flex-col">
      <h1 className="text-center text-3xl font-bold  text-red-700">
        Most Recent Disasters
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <DisasterCard key={event.id} event={event} />
        ))}
      
      </div>
       <div className=" w-full flex justify-end my-5">
         <Link  to={'/disasters'} className="text-xl flex items-center hover:underline  font-bold">View All <ArrowRight /></Link>
       </div>
      
    </div>
  );
};

export default RecentDisasters;

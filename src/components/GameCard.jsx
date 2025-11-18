import { Download, Star, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const GameCard = ({disaster}) => {
// console.log(disaster?.type);

    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Header Image / Map Link */}
      
        <div className="h-48 w-full bg-gray-200 relative">
          <img
            src={disaster.image}
            alt={disaster.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-semibold text-lg">
            View Live Location
          </div>
        </div>
      

      {/* Card Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{disaster.name}</h2>
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              disaster.type === "Cyclone"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {disaster.type}
          </span>
          <span className="text-sm text-gray-600">{disaster.date.split("T")[0]}</span>
        </div>

        <p className="text-gray-700 mb-3">
          <strong>Severity:</strong> {disaster.severity} <br />
          <strong>Wind Speed:</strong> {disaster.wind_speed || "N/A"} <br />
          <strong>Alert Level:</strong>{" "}
          <span
            className={`font-semibold ${
              disaster.alert_level === "Red"
                ? "text-red-600"
                : disaster.alert_level === "Orange"
                ? "text-orange-500"
                : "text-yellow-500"
            }`}
          >
            {disaster.alert_level}
          </span>
        </p>

        <div className="flex items-center justify-between text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" /> {disaster.location.city}
          </span>
          <span className="flex items-center gap-1">
            <Download className="w-4 h-4" /> Map
          </span>
        </div>
         <div className='flex justify-center mt-5'>
          <Link to={`gameDetails/${disaster.id}`} className='btn btn-primary rounded-full w-full'>View Details And Map</Link>
       
         </div>
      </div>
      
    </div>
    );
};

export default GameCard;




// {
//     "id": "6",
//     "title": "Among Us",
//     "coverPhoto": "https://example.com/images/amongus.png",
//     "category": "Party",
//     "downloadLink": "https://innersloth.com/gameAmongUs.php",
//     "description": "Among Us is a multiplayer game of teamwork and betrayal where players work together — unless you're the imposter.",
//     "ratings": "4.3",
//     "developer": "Innersloth"
// }
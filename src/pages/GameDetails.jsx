import { Download, Star, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const GameDetails = () => {
  const [disaster, setDisaster] = useState(null);
  const { id } = useParams();
  const disasters = useLoaderData();

  // Set disaster based on ID
  useEffect(() => {
    if (disasters?.length) {
      const singleDisaster = disasters.find((g) => g?.id === Number(id));
      setDisaster(singleDisaster);
    }
  }, [disasters, id]);

  if (!disaster) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 md:p-12">
      {/* Header Banner */}
      <title>Disaster Details</title>

      {/* Map / Live Location */}
      {disaster?.live_location && (
        <a
          href={disaster.live_location}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-48 md:h-96 w-full bg-gray-200 relative rounded-3xl overflow-hidden shadow-lg mb-6">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${disaster?.location?.lat},${disaster?.location?.lon}&zoom=6&size=600x300&markers=color:red%7C${disaster?.location?.lat},${disaster?.location?.lon}&key=YOUR_API_KEY`}
              alt={disaster?.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-semibold text-lg">
              View Live Location
            </div>
          </div>
        </a>
      )}

      {/* Disaster Name & Type */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-md mb-2">
          {disaster?.name}
        </h1>
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              disaster?.type === "Cyclone"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {disaster?.type}
          </span>
          <div className="flex items-center justify-center gap-3 text-yellow-400 ">
           <span className="text-xl font-bold text-green-black">Date</span>
            <span className="text-sm">
              {disaster?.date?.split("T")?.[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left: Description */}
        <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">
            About Disaster
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Severity:</strong> {disaster?.severity} <br />
            <strong>Wind Speed:</strong> {disaster?.wind_speed} <br />
            <strong>Alert Level:</strong>{" "}
            <span
              className={`font-semibold ${
                disaster?.alert_level === "Red"
                  ? "text-red-600"
                  : disaster?.alert_level === "Orange"
                  ? "text-orange-500"
                  : "text-yellow-500"
              }`}
            >
              {disaster?.alert_level || "N/A"}
            </span>{" "}
            <br />
            <strong>Location:</strong> {disaster?.location?.city || "N/A"} (
            {disaster?.location?.lat || "N/A"}, {disaster?.location?.lon || "N/A"})
          </p>

          <div className="flex items-center gap-4">
           
            <div className="flex items-center gap-2 text-gray-700">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">{disaster?.type || "Info"}</span>
            </div>
          </div>
        </div>

        {/* Right: Optional Additional Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Details</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <strong>Predicted Path:</strong>{" "}
              {disaster?.predicted_path
                ?.map((p) => `(${p?.lat || "N/A"}, ${p?.lon || "N/A"})`)
                .join(" → ") || "N/A"}
            </li>
            <li>
              <strong>Alert Level:</strong> {disaster?.alert_level || "N/A"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import LoadingSpinner from "../components/LoadingSpinner";

const DisasterDetails = () => {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [date, setDate] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationName, setLocationName] = useState("");

  const { DisasterId } = useParams();

  // Fetch disaster event
  useEffect(() => {
    setLoading(true);
    fetch(`https://eonet.gsfc.nasa.gov/api/v2.1/events/${DisasterId}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setDate(data.geometries[0]?.date || "");
        setLatitude(data.geometries[0]?.coordinates[1] || null); 
        setLongitude(data.geometries[0]?.coordinates[0] || null);
      })
      .finally(() => setLoading(false));
  }, [DisasterId]);

  // Reverse geocode
  useEffect(() => {
    if (latitude && longitude) {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
        .then(res => res.json())
        .then(data => setLocationName(data.display_name || "Unknown location"))
        .catch(() => setLocationName("Unknown location"));
    }
  }, [latitude, longitude]);

  const position = latitude && longitude ? [latitude, longitude] : null;

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title Card */}
      <div className="bg-red-100 border-l-4 border-red-600 p-4 mb-6 shadow-md">
        <h1 className="text-3xl font-bold text-red-700 mb-2">{event?.title}</h1>
        <p className="text-gray-800">
          <span className="font-semibold">Date:</span> {date ? new Date(date).toLocaleString() : "Unknown"}
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Location:</span> {locationName || "Loading..."}
        </p>
        <p className="text-gray-600 mt-1">
          Coordinates: {latitude}, {longitude}
        </p>
      </div>

      {/* Map Card */}
      {position ? (
        <div className="h-[60vh] rounded-lg shadow-md overflow-hidden border">
          <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <strong>{event?.title}</strong><br />
                Date: {date ? new Date(date).toLocaleString() : "Unknown"}<br />
                Location: {locationName}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <p className="text-red-500 mt-4 font-semibold text-center">Map not available for this event.</p>
      )}
    </div>
  );
};

export default DisasterDetails;

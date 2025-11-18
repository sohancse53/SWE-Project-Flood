import React from 'react';
import { Link } from 'react-router';

const DisasterCard = ({event}) => {

  const {
    id,
    title: name,
    description = "(no description)",
    link
  } = event;

  const {
    categories: [{ id: categoryId, title: categoryTitle } = {}],
    sources: [{ id: sourceId, url: sourceUrl } = {}],
    geometries: [
      {
        date: geometryDate,
        type: geometryType,
        coordinates: [longitude, latitude] = []
      } = {}
    ] = []
  } = event;

  return (
    <div className="flex justify-center mt-10">
  <div className="max-w-md w-full bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 flex flex-col h-full">
    <div className="p-6 flex flex-col flex-1">
      <h2 className="text-2xl font-bold text-red-600 mb-2">{name}</h2>

      <div className="flex-1">
        <div className="mb-3">
          <span className="font-semibold">Category:</span> {categoryTitle} (ID: {categoryId})
        </div>

        <div className="mb-3">
          <span className="font-semibold">Source:</span>{" "}
          <a
            href={sourceUrl}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {sourceId}
          </a>
        </div>

        <div className="mb-3">
          <span className="font-semibold">Observed At:</span>{" "}
          {new Date(geometryDate).toLocaleString()}
        </div>

        <div className="mb-3">
          <span className="font-semibold">Location:</span> Lat: {latitude.toFixed(4)}, Lon:{" "}
          {longitude.toFixed(4)} ({geometryType})
        </div>
      </div>

      <Link
        to={`/disasters-details/${id}`}
        className="mt-auto btn btn-secondary"
      >
        View More Details
      </Link>
    </div>
  </div>
</div>

  );
};

export default DisasterCard;

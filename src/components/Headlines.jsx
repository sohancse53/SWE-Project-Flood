import React from "react";
import Marquee from "react-fast-marquee";

const Headlines = ({latest}) => {
  return (
    <div className="border-3 border-gray-400  bg-blue-100 mt-5 flex items-center ">
        <button className="bg-red-400 font-bold text-white py-3">Breaking news</button>
      <Marquee>
        {
          latest.map(l =><p className="ml-4 font-semibold">{l} | </p>)
        }
      </Marquee>
    </div>
  );
};

export default Headlines;

import React from "react";
import Marquee from "react-fast-marquee";

const Headlines = () => {
  return (
    <div className="border-3 border-gray-400  bg-blue-100 mt-5 flex items-center ">
        <button className="bg-red-400 font-bold text-white py-3">Breaking news</button>
      <Marquee>
        
      </Marquee>
    </div>
  );
};

export default Headlines;

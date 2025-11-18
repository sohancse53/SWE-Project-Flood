import React from "react";
import Marquee from "react-fast-marquee";

const Headlines = ({ disasters }) => {
  return (
    <div className="border-3 border-gray-400  bg-blue-100 mt-5 flex items-center ">
        <button className="bg-red-400 font-bold text-white py-3">Breaking news</button>
      <Marquee>
        {disasters.map((d) => (
          <p className="mr-5 font-semibold">
            {d.type} {d.alert_level} {d.name} {d.date}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Headlines;

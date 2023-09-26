import React from "react";

import Male from "../images/icons8-person-raising-hand-96.png";
import Female from "../images/icons8-woman-raising-hand-96.png";

const CardList = ({ name, gender, image, onClick }) => {
  const icons = gender === "Male" ? Male : Female;

  return (
    <div className="relative flex flex-col items-center justify-center m-5 ">
      <div>
        <img src={image} className="rounded-lg" alt={`${name}`} />
      </div>
      <div className="absolute rounded-lg w-60 -bottom-5 h-15 bg-gray bg-slate-800">
        <h3 className="py-1 text-sm text-center">{name}</h3>
        <div className="flex items-center justify-between w-full px-4 py-1 text-xs rounded-b-lg bg-slate-500">
          <div className="flex items-center ">
            <img src={icons} className="w-5 mr-1" alt="male icon" />
            {gender}
          </div>
          <button
            onClick={onClick}
            className="px-2 py-1 rounded-md bg-slate-800"
          >
            i More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;

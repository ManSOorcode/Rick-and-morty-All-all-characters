import React from "react";

import Overlay from "./Overlay";

const Modal = ({ onClick, modalValue }) => {
  const { img, name, status, location, species, episode, gender } = modalValue;
  //   console.log( , , , , episode);
  return (
    <Overlay onClick={onClick}>
      <div className="z-20 w-full h-full md:top-0 md:right-0 md:w-72 bg-slate-900">
        <div className="w-full">
          <img className="w-96 " src={img} alt={name} />
          <button
            onClick={onClick}
            className="absolute w-8 text-2xl text-gray-700 transition duration-200 bg-gray-900 rounded-lg top-4 left-4 active:bg-white active:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="w-full pt-6 pl-8">
          <h3 className="mb-4 text-xl">name: {name}</h3>
          <div>
            <p className="mb-2">Status: {status}</p>
            <p className="mb-2">Location:{location} </p>
            <p className="mb-2">Gender: {gender}</p>
            <p className="mb-2">Species: {species}</p>
            <p>No of Episodes: {episode}</p>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;

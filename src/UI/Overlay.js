import React from "react";

const Overlay = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="w-[100vw] h-[100vh] bg-zinc-700 bg-opacity-95 z-10 fixed"
    >
      {props.children}
    </div>
  );
};

export default Overlay;

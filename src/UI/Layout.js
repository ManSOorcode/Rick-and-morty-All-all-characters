import { useState } from "react";
import Cards from "../Components/Cards";

import image from "../images/image-removebg-preview.png";

const Layout = (props) => {
  const [prevState, setPrevState] = useState(1);

  const [searchValue, setSearchValue] = useState("");

  const prevHandler = () => {
    if (prevState > 1) {
      const currentState = prevState - 1;
      setPrevState(currentState);
    }
    setSearchValue("");
  };
  const nextHandler = () => {
    if (prevState === 42) {
      setPrevState(prevState);
    } else {
      const currentState = prevState + 1;
      setPrevState(currentState);
    }
    setSearchValue("");
  };

  const inputdatahandler = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="relative w-screen h-screen font-amaranth">
      <header
        className={`flex items-center justify-between h-16 text-gray-400 bg-slate-900 fixed top-0 left-0 right-0 z-10`}
      >
        <img src={image} className="w-28 h-30" alt="RickAndMonty" />
        <button className="px-2 py-1 mr-10 text-2xl bg-white rounded-xl ">
          💡
        </button>
      </header>
      <main className=" min-h-[100vh] text-white bg-black ">
        <div className="w-full pt-5 text-center ">
          <input
            type="text"
            className="w-1/2 h-10 pl-4 mt-16 bg-gray-800 border rounded-lg outline-none placeholder:text-lg focus:border-cyan-400"
            placeholder="Search 🔍"
            onChange={inputdatahandler}
            value={searchValue}
          />
        </div>

        <Cards changeCard={prevState} seachingCards={searchValue} />
        <div className="flex justify-center text-center col-span-full ">
          <button
            className="px-6 py-2 m-4 bg-gray-900 rounded-lg text-slate-300"
            onClick={prevHandler}
          >
            Prev
          </button>
          <button
            className="px-6 py-2 m-4 bg-gray-900 rounded-lg text-slate-300"
            onClick={nextHandler}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Layout;

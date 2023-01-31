// import { SiTailwindcss } from "react-icons/si";
import { Fragment, useState, useRef } from "react";
import Cards from "./Components/Cards";

const App = () => {
  const [prevState, setPrevState] = useState(1);
  //   const searchValue = useRef();
  const [inputValue, setInputState] = useState("");
  const [cardValue, setCardValue] = useState([]);

  const prevHandler = () => {
    if (prevState > 1) {
      const currentState = prevState - 1;
      setPrevState(currentState);
      console.log(currentState);
    }
  };
  const nextHandler = () => {
    if (prevState === 42) {
      setPrevState(prevState);
    } else {
      const currentState = prevState + 1;
      setPrevState(currentState);

      console.log(currentState);
    }
  };

  const filterCardHandler = (items) => {
    setCardValue(items);
    // console.log(e);
  };

  const inputdatahandler = (e) => {
    setInputState(e.target.value);
    // const
  };
  console.log(inputValue);
  //   const changeHandler = () => {};
  return (
    <Fragment>
      <header className="flex items-center justify-between h-16 text-gray-400 bg-slate-900">
        <h1 className="ml-10 text-4xl">Rick&Monty</h1>
        <button className="px-6 py-1 mr-10 text-2xl bg-white rounded-xl">
          Click
        </button>
      </header>
      <main className=" min-h-[100vh] text-white bg-black ">
        <div className="w-full pt-5 text-center ">
          <input
            type="text"
            className="w-1/2 h-10 pl-4 bg-gray-800 border rounded-lg outline-none placeholder:text-lg focus:border-cyan-400"
            placeholder="Search 🔍"
            onChange={inputdatahandler}
            // ref={searchValue}
            value={inputValue}
          />
          {/* <div className="absolute top-0 right-0"></div> */}
        </div>

        <Cards changeCard={prevState} inputValue={filterCardHandler} />
        <div className="flex text-center text-black bg-gray-300 col-span-full justify-evenly ">
          <button onClick={prevHandler}>Prev</button>
          <button onClick={nextHandler}>Next</button>
        </div>
      </main>
    </Fragment>
  );
};

export default App;

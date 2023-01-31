// import { SiTailwindcss } from "react-icons/si";
import { useState } from "react";
import Cards from "./Components/Cards";

const App = () => {
  const [prevState, setPrevState] = useState(1);

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
  return (
    <main className="grid min-h-[100vh] gap-4 text-white bg-black xl:gri d-cols-6 lg:grid-cols-4 md:grid-cols-2">
      {/* <p className="p-2 text-2xl capitalize bg-red-300">
				use this template for react practice with tailwind
				<SiTailwindcss className="inline mx-1 text-cyan-500" />
			</p> */}
      <Cards changeCard={prevState} />
      <div className="flex text-center text-black bg-gray-300 col-span-full justify-evenly ">
        <button onClick={prevHandler}>Prev</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </main>
  );
};

export default App;

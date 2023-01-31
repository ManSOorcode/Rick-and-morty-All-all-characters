// import { data } from "autoprefixer";
// import { data } from "autoprefixer";
import React, { Fragment, useEffect, useRef, useState } from "react";

import CardList from "./CardList";

const Cards = ({ changeCard }) => {
  console.log(changeCard);
  // let transpoter = useRef(null);
  //   let transpoter;
  const [state, setstate] = useState([]);
  //   const [nextState, setNextState] = useState("");
  useEffect(() => {
    async function rickandmontyLocation() {
      //   const response = await fetch("https://rickandmortyapi.com/api/character");
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${changeCard}`
      );

      const data = await response.json();
      const { results, ...rest } = data;

      //   transpoter = [];
      //   transpoter.current = data;
      //   transpoter.push(results);

      const dummyData = [];

      for (let key in results) {
        dummyData.push({
          id: new Date(),
          name: results[key].name,
          img: results[key].image,
          gender: results[key].gender,
        });
      }

      setstate(dummyData);
    }
    rickandmontyLocation();
  }, [changeCard]);

  //   console.log(state, "lol");

  //   const { results, ...rest } = state;

  //   console.log(results);
  //   console.log(...state);

  const items = state.map((item) => (
    <CardList
      key={item.key}
      name={item.name}
      image={item.img}
      gender={item.gender}
    />
  ));

  //   console.log(items);
  return (
    // <button onClick={clickHandler} className="bg-white">
    //   click here
    // </button>
    // <p>hello</p>
    <Fragment>{items}</Fragment>
  );
};

export default Cards;

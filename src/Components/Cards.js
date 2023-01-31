// import { data } from "autoprefixer";
// import { data } from "autoprefixer";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Modal from "../UI/Modal";

import CardList from "./CardList";

const Cards = ({ changeCard, inputValue }) => {
  //   console.log(changeCard);
  // let transpoter = useRef(null);
  //   let transpoter;
  const [state, setstate] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalValue, setModalValue] = useState([]);
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
          id: Math.random(),
          name: results[key].name,
          img: results[key].image,
          gender: results[key].gender,
          species: results[key].species,
          status: results[key].status,
          location: results[key].location.name,
          episode: results[key].episode.length,
        });
      }
      inputValue(dummyData);

      setstate(dummyData);
    }
    rickandmontyLocation();
  }, [changeCard]);
  //   let objectItem = [];
  const ShowmodalHandler = (id) => {
    setModalState(true);
    console.log(id);
    // if(id == )
    // console.log(state.includes(id));
    const itemFinder = state.find((item) => item.id === id);
    setModalValue(itemFinder);
  };
  //   console.log(modalValue);

  const hiddeModalHandler = () => {
    setModalState(false);
  };

  //   console.log(state, "lol");

  //   const { results, ...rest } = state;

  //   console.log(results);
  //   console.log(...state);

  const items = state.map((item) => (
    <CardList
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.img}
      gender={item.gender}
      onClick={ShowmodalHandler.bind(null, item.id)}
    />
  ));

  //   console.log(items);
  return (
    // <button onClick={clickHandler} className="bg-white">
    //   click here
    // </button>
    // <p>hello</p>
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
      {modalState && (
        <Modal onClick={hiddeModalHandler} modalValue={modalValue} />
      )}
      {items}
    </div>
  );
};

export default Cards;

import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal";

import CardList from "./CardList";
import image from "../images/image-removebg-preview.png";

import pageError from "../images/pagenotFound.png";

const Cards = ({ changeCard, seachingCards }) => {
  const [state, setstate] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [modalValue, setModalValue] = useState([]);

  const [errorstate, setErrorstate] = useState([]);

  useEffect(() => {
    async function rickandmontyLocation() {
      //   const response = await fetch("https://rickandmortyapi.com/api/character");
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${changeCard}`
      );

      if (!response.ok) {
        throw new Error("Something is went wrong with");
      }

      const data = await response.json();

      const { results, ...rest } = data;

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

      setstate(dummyData);
    }

    rickandmontyLocation().catch((err) => setErrorstate(err.message));
  }, [changeCard]);

  const ShowmodalHandler = (id) => {
    setModalState(true);
    console.log(id);

    const itemFinder = state.find((item) => item.id === id);
    setModalValue(itemFinder);
  };

  const hiddeModalHandler = () => {
    setModalState(false);
  };

  if (state.length === 0) {
    return (
      <div className="grid items-center justify-center w-full h-full my-6 text-xl text-center md:text-5xl xl:text-6xl ">
        {errorstate}
        <img
          src={image}
          className="m-auto w-72 h-52 md:w-96 md:h-60"
          alt="RickAndMonty"
        />
      </div>
    );
  }

  let items = state
    .filter((item) =>
      item.name.toLowerCase().includes(seachingCards.toLowerCase().trim())
    )
    .map((item) => (
      <CardList
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.img}
        gender={item.gender}
        onClick={ShowmodalHandler.bind(null, item.id)}
      />
    ));
  // }

  if (items.length === 0) {
    return (
      <div className="flex justify-center">
        <img src={pageError} alt="Not Found" />
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 ">
      {modalState && (
        <Modal onClick={hiddeModalHandler} modalValue={modalValue} />
      )}
      {items}
    </div>
  );
};

export default Cards;

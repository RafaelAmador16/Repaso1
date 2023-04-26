// Imports
import React, { useEffect, useState } from "react";
import getPersonaje from "../helper/getPersonaje";
import Card from "./Card";

// Zona de variables globales
const initialStatePersonajes = [];

const Cards = () => {
  // Estados
  const [personajes, setPersonajes] = useState(initialStatePersonajes);

  // Efectos
  useEffect(() => {
    pintarPersonajes();
  }, []);

  // Lógica
  const pintarPersonajes = () => {
    getPersonaje()
      .then((datos) => {
        setPersonajes(datos);
      })
      .catch((error) => console.log(error));
  };
  const handleDeletePersonaje = (url) => {
  setPersonajes(personajes.filter((personaje) => personaje.url !== url));
  };
  return (
    <>
      {personajes.map((personaje, index) => (
        <div className="card" key={index}>
          <Card key={index} personaje={personaje}/>
          <button
            onClick={() => handleDeletePersonaje(personaje.url)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Cards;
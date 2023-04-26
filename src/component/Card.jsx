import React from "react";

const Card = ({personaje,index}) => {
const urlParts = personaje.url.split('/');
const id = urlParts.pop();
  return (
    <div>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${urlParts.pop()}.jpg`}
        width="30%"
        alt={personaje.name}
        
      />
      <h2>{personaje.name}</h2>
      <p>{personaje.gender}</p>
      
    </div>
  );
};

export default Card;

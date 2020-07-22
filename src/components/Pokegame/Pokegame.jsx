import React from "react";
import cards from "../../data";
import Pokedex from "../Pokedex/Pokedex";

const Pokegame = () => {
  let hand1 = [];
  let hand2 = [...cards];

  while (hand1.length < hand2.length) {
    let randInx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randInx, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 < exp2} />
    </div>
  );
};

export default Pokegame;

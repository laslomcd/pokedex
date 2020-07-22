import React from "react";
import Pokecard from "../Pokecard/Pokecard";
// import cards from "../../data";
import "./Pokedex.css";

const Pokedex = ({ pokemon, exp, isWinner }) => {
	let title;
	if (isWinner) {
		title = <h1 className="Pokedex-winner">Winning Hand!</h1>;
	} else {
		title = title = <h1 className="Pokedex-loser">Losing Hand!</h1>;
	}
	return (
		<div className="Pokedex">
			<p>{title}</p>
			Total Exp: {exp}
			<div className="Pokedex-cards">
				{pokemon.map((p) => (
					<Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} key={p.id} />
				))}
			</div>
		</div>
	);
};

export default Pokedex;

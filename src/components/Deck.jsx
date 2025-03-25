import React from "react";
import { pokemon } from "../data";
import PokemonCard from "./PokemonCard";

function shuffle(array) {
	// Fisher–Yates shuffle
	var m = array.length,
		t,
		i;

	while (m) {
		i = Math.floor(Math.random() * m--);

		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

export default function Deck() {
	return (
		<div className="deck">
			{shuffle(pokemon).map((p) => (
				<PokemonCard id={p.id} pokemon={p.name} type={p.type} />
			))}
		</div>
	);
}

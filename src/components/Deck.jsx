import React from "react";
import { pokemon } from "../data";
import PokemonCard from "./PokemonCard";

export default function Deck() {
	return (
		<div className="deck">
			{pokemon.map((p) => (
				<PokemonCard id={p.id} pokemon={p.name} type={p.type} />
			))}
		</div>
	);
}

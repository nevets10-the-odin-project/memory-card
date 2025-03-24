import React from "react";

export default function PokemonCard({ pokemon, color, img }) {
	return (
		<div style={{ backgroundColor: color }}>
			<img src={img} alt={pokemon} />
			<h1>{pokemon}</h1>
		</div>
	);
}

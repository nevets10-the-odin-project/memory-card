import React, { useEffect, useState } from "react";

export default function PokemonCard({ pokemon, color }) {
	const [imgSrc, setImgSrc] = useState(" ");

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { mode: "cors" })
			.then((res) => res.json())
			.then((res) => setImgSrc(res.sprites.front_default));
	}, [pokemon]);

	return (
		<div style={{ backgroundColor: color }}>
			<img src={imgSrc} alt={pokemon} />
			<h1>{pokemon}</h1>
		</div>
	);
}

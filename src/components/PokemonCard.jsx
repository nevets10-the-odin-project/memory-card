import "../styles/pokemonCard.css";
import React, { useEffect, useState } from "react";

export default function PokemonCard({ pokemon, type, handleClick }) {
	const [imgSrc, setImgSrc] = useState(" ");

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { mode: "cors" })
			.then((res) => res.json())
			.then((res) => setImgSrc(res.sprites.front_default));
	}, [pokemon]);

	return (
		<div className={type + " pokemon-card"} onClick={handleClick}>
			<img src={imgSrc} alt={pokemon} className="pokemon-img" />
			<h1>{pokemon}</h1>
		</div>
	);
}

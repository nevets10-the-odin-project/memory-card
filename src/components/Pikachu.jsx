import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export default function Pikachu() {
	const [img, setImg] = useState(" ");

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/pikachu", { mode: "cors" })
			.then((res) => res.json())
			.then((res) => setImg(res.sprites.front_default));
	}, []);

	return <PokemonCard pokemon={"pikachu"} color={"yellow"} img={img} />;
}

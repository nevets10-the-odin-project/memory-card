import { useState } from "react";
import "./App.css";
import { pokemon } from "./data";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<>
			<div className="deck">
				{shuffle(pokemon).map((p) => (
					<PokemonCard id={p.id} pokemon={p.name} type={p.type} />
				))}
			</div>
		</>
	);
}

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

export default App;

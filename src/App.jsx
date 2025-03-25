import "./App.css";
import { useState } from "react";
import { pokemon } from "./data";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<>
			<div className="header">
				<div>
					<h1>Pokemon Memory Game!</h1>
					<p>
						Get points by clicking on a pokemon card, but don't click on any more than
						once!
					</p>
				</div>
				<div className="score">
					<p>Score: {score}</p>
					<p>High Score: {highScore}</p>
				</div>
			</div>
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

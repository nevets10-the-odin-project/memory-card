import { useState } from "react";
import "./App.css";
import Pikachu from "./components/Pikachu";
import Squirtle from "./components/Squirtle";
import Charizard from "./components/Charizard";
import Beedrill from "./components/Beedrill";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<div className="deck">
			<Pikachu />
			<Squirtle />
			<Charizard />
			<Beedrill />
		</div>
	);
}

export default App;

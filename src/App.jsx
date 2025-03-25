import { useState } from "react";
import "./App.css";
import Pikachu from "./components/Pikachu";
import Squirtle from "./components/Squirtle";
import Charizard from "./components/Charizard";
import Beedrill from "./components/Beedrill";
import Pidgey from "./components/Pidgey";
import Ekans from "./components/Ekans";
import Diglett from "./components/Diglett";
import Mankey from "./components/Mankey";
import Abra from "./components/Abra";
import Gengar from "./components/Gengar";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<div className="deck">
			<Pikachu />
			<Squirtle />
			<Charizard />
			<Beedrill />
			<Pidgey />
			<Ekans />
			<Diglett />
			<Mankey />
			<Abra />
			<Gengar />
		</div>
	);
}

export default App;

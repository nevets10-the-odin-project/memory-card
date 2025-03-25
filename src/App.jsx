import { useState } from "react";
import "./App.css";
import Pikachu from "./components/Pikachu";
import Squirtle from "./components/Squirtle";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<div className="deck">
			<Pikachu />
			<Squirtle />
		</div>
	);
}

export default App;

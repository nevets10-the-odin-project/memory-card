import { useState } from "react";
import "./App.css";
import Deck from "./components/Deck";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<>
			<Deck />
		</>
	);
}

export default App;

import { useState } from "react";
import "./App.css";
import Pikachu from "./components/Pikachu";

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<>
			<Pikachu />
		</>
	);
}

export default App;

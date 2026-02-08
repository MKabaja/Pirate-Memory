import Header from './components/Header';
import Gameboard from './components/Gameboard';
import { generateBoard } from './utils/gameLogic';

import { pairsPool } from './data/cardData';

import './App.css';

function App() {
	const deck = generateBoard(pairsPool, 6);
	console.log(deck);

	return (
		<>
			<Header />
			<Gameboard />
		</>
	);
}

export default App;

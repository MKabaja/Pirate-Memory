import './Gameboard.css';
import Card from './Card';
import { generateBoard } from '../utils/gameLogic';
import { pairsPool } from '../data/cardData';
import { useState } from 'react';

export default function Gameboard() {
	const [deck, setDeck] = useState(() => generateBoard(pairsPool, 6));
	const [boardLocked, setBoardLocked] = useState(false);
	const isGameWon = deck.every((card) => card.isMatched);

	return (
		<section id='game-board'>
			<ul>
				{deck.map((item) => {
					return (
						<Card
							key={item.id}
							card={item}
							onFlip={handleFlip}
							disabled={boardLocked}
						/>
					);
				})}
			</ul>
		</section>
	);

	function handleFlip(item) {
		if (item.isFlipped) return;
		const currentFlipped = deck.filter(
			(card) => card.isFlipped && !card.isMatched,
		);
		if (currentFlipped.length >= 2) return;

		updateCardProperty(item.id, 'isFlipped', true);
		console.log(currentFlipped, item);
		if (currentFlipped.length === 1) {
			checkMatch(currentFlipped[0], item);
		}
	}

	function checkMatch(firstCard, secondCard) {
		setBoardLocked(true);

		if (firstCard.pairId === secondCard.pairId) {
			updateMultipleCardProperties(
				[firstCard.id, secondCard.id],
				'isMatched',
				true,
			);

			setBoardLocked(false);
		} else {
			setTimeout(() => {
				updateMultipleCardProperties(
					[firstCard.id, secondCard.id],
					'isFlipped',
					false,
				);

				setBoardLocked(false);
			}, 1000);
		}
	}

	function updateCardProperty(cardId, propertyName, newValue) {
		setDeck((deck) =>
			deck.map((card) => {
				if (card.id === cardId) {
					return { ...card, [propertyName]: newValue };
				}
				return card;
			}),
		);
	}
	function updateMultipleCardProperties(cardIds, propertyName, newValue) {
		setDeck((deck) =>
			deck.map((card) => {
				if (cardIds.includes(card.id)) {
					return { ...card, [propertyName]: newValue };
				}
				return card;
			}),
		);
	}
}

export default function Card({ card }) {
	return (
		<li className={`card ${chooseCardClass(card)}`}>
			{card.type === 'letter' && (
				<div>
					<h3>{card.letter}</h3>
				</div>
			)}

			{card.type === 'picture' && (
				<img
					src={card.path}
					alt={card.content}
				/>
			)}
		</li>
	);

	function chooseCardClass(card) {
		let cardClass = 'card_not-flipped';

		if (card.isFlipped && card.type === 'picture')
			cardClass = 'card_flipped';
		if (card.isFlipped && card.type === 'letter')
			cardClass = 'card_flipped-letter';

		return cardClass;
	}
}

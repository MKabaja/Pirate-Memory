export default function Card({ card, onFlip }) {
	const { type, isFlipped, letter, path, content } = card;
	const cardStatus = isFlipped ? 'flipped' : 'covered';
	const cardBack = '/cards/back-coin.png';

	return (
		<li className='card-wrapper'>
			<button
				type='button'
				className={`card ${cardStatus}`}
				onClick={() => onFlip(card)}
				aria-expanded={isFlipped}
			>
				<div className='card-face card-back'>
					<img
						src={cardBack}
						alt='coin'
					/>
				</div>

				<div className='card-face card-contnent'>
					{type === 'letter' ? (
						<h3>{letter}</h3>
					) : (
						<img
							src={path}
							alt={content}
						/>
					)}
				</div>
			</button>
		</li>
	);
}

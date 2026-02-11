import './Card.css';

export default function Card({ card, onFlip, disabled }) {
	const { type, isFlipped, path, content, isMatched } = card;
	const cardStatus = isFlipped ? 'flipped' : 'covered';
	const cardBack = '/cards/back-coin.png';
	const pairStatus = isMatched ? 'matched' : 'not-matched';

	return (
		<li className={`card-wrapper ${pairStatus}`}>
			<button
				type='button'
				className={`card ${cardStatus}`}
				onClick={() => onFlip(card)}
				aria-expanded={isFlipped}
				disabled={disabled}
			>
				<div className='card-face card-back'>
					<img
						src={cardBack}
						alt='coin'
					/>
				</div>

				<div className='card-face card-content'>
					{type === 'letter' ? (
						<h3>{content}</h3>
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

import './Gameboard.css';

export default function Gameboard() {
	return (
		<section id='game-board'>
			<ul>
				<li className='card card_flipped'>
					<img
						src='/cards/ship.png'
						alt=''
					/>
					<h2>Statek</h2>
				</li>
				<li className='card card_flipped-letter'>
					<div>
						<h3>S</h3>
					</div>
				</li>
				<li className='card card_not-flipped'></li>
				<li className='card card_not-flipped'></li>
				<li className='card card_not-flipped'></li>
				<li className='card card_flipped-letter'>
					<div>
						<h3>A</h3>
					</div>
				</li>
				<li className='card card_not-flipped'></li>
				<li className='card card_not-flipped'></li>
			</ul>
		</section>
	);
}

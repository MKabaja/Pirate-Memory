import './Gameboard.css';
import Card from './Card';

export default function Gameboard({ deck }) {
	return (
		<section id='game-board'>
			<ul>
				{deck.map((item) => {
					return (
						<Card
							key={item.id}
							card={item}
						/>
					);
				})}
				{/* <li className='card card_flipped'>
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
				<li className='card card_not-flipped'></li> */}
			</ul>
		</section>
	);
}

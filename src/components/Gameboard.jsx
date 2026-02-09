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
			</ul>
		</section>
	);
}

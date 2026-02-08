export function shuffleArray(arrayToShuffle) {
	const shuffled = [...arrayToShuffle];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
}

export function generateBoard(pairsPool, pairCount) {
	const shuffledPair = shuffleArray(pairsPool);
	const selectedDeck = shuffledPair.slice(0, pairCount);

	const cards = selectedDeck.flatMap((pair) => {
		const card1 = {
			id: `${pair.pairId}-letter`,
			pairId: pair.pairId,
			content: pair.letter,
			type: 'letter',
			isFlipped: false,
			isMatched: false,
		};
		const card2 = {
			id: `${pair.pairId}-picture`,
			pairId: pair.pairId,
			content: pair.word,
			type: 'picture',
			path: pair.imagePath,
			isFlipped: false,
			isMatched: false,
		};

		return [card1, card2];
	});

	return shuffleArray(cards);
}

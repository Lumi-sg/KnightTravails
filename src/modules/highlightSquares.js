export function highlightSquares(moves) {
	let delay = 0;
	const totalMoves = moves.length;
	moves.forEach((move, index) => {
		setTimeout(() => {
			const square = document.querySelector(
				`.row:nth-child(${8 - move.x}) .square:nth-child(${move.y + 1})`
			);
			if (index === 0) {
				square.classList.add("highlight-green");
			} else if (index === totalMoves - 1) {
				square.classList.add("highlight-red");
			} else {
				square.classList.add("highlight");
			}
			square.textContent = `(${move.x}, ${move.y})`;
		}, delay);
		delay += 1000;
	});
}

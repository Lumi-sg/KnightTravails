export function highlightSquares(moves) {
	const body = document.querySelector("body");
	const blockDiv = document.createElement("div");
	blockDiv.className = "block";
	body.appendChild(blockDiv);

	let delay = 0;
	const totalMoves = moves.length;
	moves.forEach((move, index) => {
		setTimeout(() => {
			const square = document.querySelector(
				`.row:nth-child(${8 - move.x}) .square:nth-child(${move.y + 1})`
			);
			if (index === 0) {
				square.classList.add("highlight-green");
				square.textContent = "";
			} else if (index === totalMoves - 1) {
				square.classList.add("highlight-red");
				square.textContent = index;
			} else {
				square.classList.add("highlight");
				square.textContent = index;
			}
		}, delay);
		delay += 1000;
	});

	// remove the blockDiv after all the highlights have been applied
	setTimeout(() => {
		const allSquares = document.querySelectorAll(".square");
		allSquares.forEach((square) => square.classList.remove("clickedTwo"));
		blockDiv.remove();
	}, delay + 500); // add extra delay to ensure all highlights have been applied
}

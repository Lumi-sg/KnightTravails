import { knightTravail } from "./knightTravail";

export function createChessBoard() {
	const body = document.querySelector("body");
	body.style.backgroundColor = "black";
	const container = document.querySelector(".container");
	container.className = "container";
	const board = document.createElement("div");
	board.className = "chessboard";
	const moveText = document.querySelector(".moveText");
	moveText.className = "moveText";

	const userOutput = document.createElement("div");
	userOutput.className = "userOutput";

	let startPos = null;
	let selectedSquares = [];

	for (let i = 0; i < 8; i++) {
		const row = document.createElement("div");
		row.className = `row`;

		for (let j = 0; j < 8; j++) {
			const square = document.createElement("div");
			if ((i + j) % 2 == 0) {
				square.className = "square white";
			} else {
				square.className = "square black";
			}

			square.addEventListener("click", () => {
				square.classList.add("clicked");
				selectedSquares.push(square);
				moveText.innerText = "";
				if (startPos === null) {
					startPos = [7 - i, j];
				} else {
					let endPos = [7 - i, j];
					setTimeout(() => {
						knightTravail(startPos, endPos);
						// Remove the "clicked" class from both selected squares
						selectedSquares.forEach((selectedSquare) => {
							selectedSquare.classList.remove("clicked");
						});
						selectedSquares = [];
						startPos = null;
					}, 10);
				}
			});

			row.appendChild(square);
		}
		board.appendChild(row);
	}

	container.appendChild(board);
}

import { knightTravail } from "./knightTravail";

export function createChessBoard() {
	const container = document.querySelector(".container");
	container.className = "container";
	const board = document.createElement("div");
	board.className = "chessboard";
	const moveText = document.querySelector(".moveText");
	moveText.className = "moveText";
	const userOutput = document.createElement("div");
	userOutput.className = "userOutput";

	const legendRow = document.createElement("div");
	legendRow.classList.add("legend-row");

	for (let i = 7; i >= 0; i--) {
		const legendItem = document.createElement("div");
		legendItem.textContent = i;
		legendRow.appendChild(legendItem);
	}

	// Add the legend row to the document
	container.appendChild(legendRow);

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
				const squares = document.querySelectorAll(".square");
				squares.forEach((square) => {
					square.classList.remove("highlight", "highlight-red", "highlight-green");

					square.innerText = "";
				});
				square.classList.add("clicked");
				selectedSquares.push(square);
				moveText.innerText = "";
				if (startPos === null) {
					startPos = [7 - i, j];
				} else {
					let endPos = [7 - i, j];
					setTimeout(() => {
						knightTravail(startPos, endPos);
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
	const columnLegendContainer = document.querySelector(".columnLegend");
	const legendCol = document.createElement("div");
	legendCol.classList.add("legend-col");

	for (let i = 0; i < 8; i++) {
		const legendItem = document.createElement("div");
		legendItem.classList.add("legend-item");
		legendItem.textContent = i;
		legendCol.appendChild(legendItem);
	}
	columnLegendContainer.appendChild(legendCol);
}

import { knightTravail } from "./knightTravail";

export function createChessBoard() {
	const body = document.querySelector("body");
	body.style.backgroundColor = "black";
	const container = document.createElement("div");
	container.className = "container";
	body.appendChild(container);
	const board = document.createElement("div");
	board.className = "chessboard";

	let startPos = null;

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
				if (startPos === null) {
					startPos = [7 - i, j];
				} else {
					let endPos = [7 - i, j];
					knightTravail(startPos, endPos);
					startPos = null;
				}
			});

			row.appendChild(square);
		}
		board.appendChild(row);
	}

	container.appendChild(board);
}

const chessBoard = createChessBoard();

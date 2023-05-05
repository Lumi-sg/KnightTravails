import { getLegalMoves } from "./getLegalMoves";
import { highlightSquares } from "./highlightSquares";
import { Knight } from "./knight";

export function knightTravail(start, end) {
	const startKnight = new Knight(start[0], start[1]);
	const endKnight = new Knight(end[0], end[1]);

	const queue = [];
	const visited = new Set();
	const movesMap = new Map();

	queue.push([startKnight, 0]);
	visited.add(startKnight.x + "," + startKnight.y);
	movesMap.set(startKnight.x + "," + startKnight.y, null);

	while (queue.length > 0) {
		const [knight, depth] = queue.shift();

		if (knight.x === endKnight.x && knight.y === endKnight.y) {
			const moves = [];
			let current = endKnight;

			while (current) {
				moves.unshift(current);
				current = movesMap.get(current.x + "," + current.y);
			}

			highlightSquares(moves);

			const moveText = document.querySelector(".moveText");
			moveText.innerHTML =
				`It took ${moves.length - 1} moves to go from [${startKnight.x},${
					startKnight.y
				}] to [${endKnight.x},${endKnight.y}]<br>` +
				moves.map((move) => `[${move.x},${move.y}]`).join(" &#8594; ");
		}

		const moves = getLegalMoves(knight);

		for (const move of moves) {
			const key = move.x + "," + move.y;

			if (!visited.has(key)) {
				queue.push([move, depth + 1]);
				visited.add(key);
				movesMap.set(key, knight);
			}
		}
	}

	return null;
}

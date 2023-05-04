const body = (document.querySelector("body").style.backgroundColor = "black");

class Knight {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
function getLegalMoves(knight) {
	const offsets = [
		[-2, -1],
		[-2, 1],
		[2, -1],
		[2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
	];

	const moves = [];

	for (const [dx, dy] of offsets) {
		const x = knight.x + dx;
		const y = knight.y + dy;

		if (x >= 0 && x < 8 && y >= 0 && y < 8) {
			moves.push(new Knight(x, y));
		}
	}

	return moves;
}
function knightTravail(start, end) {
	const queue = [];
	const visited = new Set();
	const movesMap = new Map();

	queue.push([start, 0]);
	visited.add(start.x + "," + start.y);
	movesMap.set(start.x + "," + start.y, null);

	while (queue.length > 0) {
		const [knight, depth] = queue.shift();

		if (knight.x === end.x && knight.y === end.y) {
			const moves = [];
			let curr = end;

			while (curr) {
				moves.unshift(curr);
				curr = movesMap.get(curr.x + "," + curr.y);
			}

			return moves;
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

const start = new Knight(0, 0);
const end = new Knight(7, 7);
const moves = knightTravail(start, end);

console.log(
	`It took ${moves.length - 1} moves to go from ${start.x},${start.y} to ${end.x},${end.y}`
);
const movesText = moves.map((move) => `(${move.x},${move.y})`).join(" -> ");
console.log(`Moves: ${movesText}`);

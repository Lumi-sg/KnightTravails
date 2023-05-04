const body = (document.querySelector("body").style.backgroundColor = "black");

class Knight {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
function getPossibleMoves(knight) {
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

	queue.push([start, 0]);
	visited.add(start.x + "," + start.y);

	while (queue.length > 0) {
		const [knight, depth] = queue.shift();

		if (knight.x === end.x && knight.y === end.y) {
			return depth;
		}

		const moves = getPossibleMoves(knight);

		for (const move of moves) {
			const key = move.x + "," + move.y;

			if (!visited.has(key)) {
				queue.push([move, depth + 1]);
				visited.add(key);
			}
		}
	}

	return -1;
}
const start = new Knight(0, 0);
const end = new Knight(7, 7);
const result = knightTravail(start, end);

console.log(result);

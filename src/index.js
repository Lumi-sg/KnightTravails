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
			let curr = endKnight;

			while (curr) {
				moves.unshift(curr);
				curr = movesMap.get(curr.x + "," + curr.y);
			}
			console.log(
				`It took ${moves.length - 1} moves to go from ${startKnight.x},${startKnight.y} to ${endKnight.x},${
					endKnight.y
				}.`
			);
			console.log(moves.map((move) => `(${move.x},${move.y})`).join(" -> "));
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
knightTravail([0, 0], [7, 7]);
knightTravail([4, 2], [1, 6]);
knightTravail([7, 5], [4, 2]);
knightTravail([0, 0], [0, 0]);

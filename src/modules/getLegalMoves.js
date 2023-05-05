import { Knight } from "./knight";

export function getLegalMoves(knight) {
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

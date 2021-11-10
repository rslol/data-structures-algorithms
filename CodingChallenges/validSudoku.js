/* Determine if a 9x9 sudoku board is valid. Only the filled cells need to be validated 
according to the following rules: 

1: Each row must contain the digits 1-9 with repetition
2: Each column must contian the digits 1-9 without repetition
3: Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition
*/

// Brute force approach
const isValidSudokuBrute = board => {
	// Check rows for repeating values
	for (let i = 0; i < board.length; i++) {
		const set = new Set();
		for (let j = 0; j < board[i]; j++) {
			// How to go through the baord via rows
			const cell = board[i][j];
			if (cell === '.') continue;
			if (set.has(cell)) return false;
			set.add(cell);
		}
	}

	// Check columns for repeating values 
	for (let i = 0; i < board.length; i++) {
		const set = new Set();
		for (let j = 0; j < board[i]; j++) {
			// How to go through the board via columns
			const cell = board[j][i];
			if (cell === '.') continue;
			if (set.has(cell)) return false;
			set.add(cell);
		}
	}

	// Check cells for repeating values 
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const set = new Set(); 
			for (let k = 0; k < 3; k++) {
				for (let l = 0; l < 3; l++) {
					const cell = board[3 * i + k][3 * j + l];
					if (cell === '.') continue; 
					if (set.has(cell)) return false; 
					set.add(cell);
				}
			}
		}
	}

	return true; 
}

// More Elegant Solution 
const isValidSudoku = board => {
	let rows = []; 
	let cols = [];
	let boxes = [];

	for (let i = 0; i < board.length; i++) {
		rows.push(new Set()); 
		cols.push(new Set()); 
		boxes.push(new Set());
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			const cell = board[i][j]; 
			const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3);
			if (cell === '.') continue; 
			if (rows[i].has(cell) || rows[j].has(cell) || boxes[boxNum].has(cell)) return false; 
			rows[i].add(cell);
			cols[j].add(cell);
			boxes[boxNum].add(cell);
		}
	}
}

const isValidSudokuElegant = board => {
	const set = new Set(); 

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			const cell = board[i][j]; 
			const boxNum = 3 * Math.floor(i/3) + Math.floor(j/3);
			const row = `row: ${i}, value: ${cell}`;
			const col = `col: ${j}, value: ${cell}`;
			const box = `row: ${boxNum}, value: ${cell}`;
			if (set.has(row) || set.has(col) || set.has(box)) return false; 
			set.add(row); 
			set.add(col); 
			set.add(box);
		}
	}
}
/* Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. 
Return the answer in any order.
A mapping of digit to letters (just like on the telephone buttons) is given below. */

const letterCombinations = digits => {
	// Use recursion and a tree structure to solve this 
	// what we return (an array)
	let result = [];

	// numberToLetterMap mapping
	const numberToLetterMap = {
		'2': 'abc', 
		'3': 'def', 
		'4': 'ghi', 
		'5': 'jkl', 
		'6': 'mno', 
		'7': 'pqrs', 
		'8': 'tuv', 
		'9': 'wxyz'
	};

	// depth first recursive helper 
	const dfs = (i, digits, slate) => {
		// base case
		if (i === digits.length) {
			result.push(slate.join(''));
			return;
		}

		// depth first recursive case 
		let chars = numberToLetterMap[digits[i]];

		for (let char of chars) {
			slate.push(char); 
			dfs(i++, digits, slate); 
			slate.pop();
		}

	}
	dfs(0, digits, []);
	return result;
};
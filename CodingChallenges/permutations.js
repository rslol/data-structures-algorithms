/* Given an array nums of distinct integers, 
return all the possible permutations. 
You can return the answer in any order.
Recursively go through the tree */

const permutations = arr => {
	let results = [];

	// depth first search recursive
	const dfs = (i, arr) => {
		// We reached the bottom of the tree
		if (i === arr.length) {
			results.push(arr.slice());
			return;
		}

		// depth first search recursive case 
		for (let j = i; j < arr.length; j++) {
			// Swap i and j (remember the swap code)
			[arr[i], arr[j]] = [arr[j], arr[i]]; 
			// Recursively call dfs 
			dfs(i++, nums);
			// Swap i and j again 
			[arr[i], arr[j]] = [arr[j], arr[i]]; 
		}
	}

	dfs(0, nums); 
	return results;
};
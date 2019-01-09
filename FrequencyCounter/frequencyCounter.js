// This patter uses objects/sets to collect values/frequencies of values
// Helpful when you have multiple pieces of data, multiple inputs and you need to compare them


// Compare two arrays, array2 should be array1^2

// Naive Code/Poor Performance Code (N^2) indexOf iterates over array
// AVOID NESTED LOOPS 
function same(arr1, arr2) {
	// If the 2 arrays aren't the same length, return false
	if (arr1.length !== arr2.length) {
		return false;
	};

	// Loop through the first array 
	for (let i = 0; i < arr1.length; i++) {
		// Make sure the 2nd power of each element in the first array is in the second array
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		// If indexOf returns -1 (not found), return false
		if (correctIndex === -1 ) {
			return false;
		}
		// If indexOf returns a 1, remove correctIndex from arr2
		arr2.splice(correctIndex, 1);
	}

	return true;
	// Loop through array1 until array2 has no more elements or correctIndex returns false
}

// The Frequency Counter (fc), instead of nested loops, loop through each array individually (0n)
function fcSame(arr1, arr2) {
	// If the 2 arrays aren't the same length, return false
	if (arr1.length !== arr2.length) {
		return false;
	}

	// Initialize objects for each loop iteration 
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	for (let val of arr1) {
		// Add one to the corresponding object, if none is there, initialize it to one
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}

	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		// Is there a product of the key^2 in the second array? If not, return false
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}

		// Are there the same amount of elements in the second array? 
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}

	return true;
}
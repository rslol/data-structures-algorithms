/* Implement a function called countUniqueValues, which accepts
a sorted array, and counts the unique values in the array. There
can be negative numbers in the array, but it will always be sorted */


// This is my attempt, which is clearly wrong
function countUniqueValues(arr) {
	if (arr.length = 0) {
		return 0;
	}

	// First Counter (Beginning of the array)
	let left = 0;
	// Second Counter
	let right = 1;

	while (left < right) {
		// Container for the amount of unique values
		let values;
		let i = arr[left];
		let j = arr[right];
		if (i.value === j.value) {
			right++;
		} else {
			left++;
		}
	}

	return values;
}

// The correct way to implement that 
function uniqueValues(arr) {
	// Knockout case
	if (arr.length === 0) {
		return 0;
	}
	
	// Initialize left counter
	let left = 0;
	// Initialize right counter 
	for (var right = 1; right < arr.length; right++) {
		// If left does not equal right
		if (arr[left] !== arr[right]) {
			// Move left counter by 1
			left++;
			// Set left counter to value of right counter
			arr[left] = arr[right];
		}
	}

	return left;
}
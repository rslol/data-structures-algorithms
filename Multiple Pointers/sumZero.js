/* Write a function called sumZero which accepts a sorted array of integers.
The function should find the First pair where the sum is 0. REturn an array 
that includes both values that sum to zero or undefined if a pair does not 
exist */

// Naive Solution, Time Complexity O(N^2), Space Complexity - O(1)
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if(arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
}

// Refactoring, using Multiple Pointers method
// Time Complexity - O(N), Space Complexity O(1)
function newSumZero(arr) {
	// left = beginning of the array
	let left = 0;
	// right = end of array, remember it's zero indexed
	let right = arr.length - 1;
	// left < right is our fail safe 
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}	
}
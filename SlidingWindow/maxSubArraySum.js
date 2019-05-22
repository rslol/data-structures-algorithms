/* Write a function called maxSubArraySum which accpets an array 
of integers and a number called n. The function sould calculate the
maximum sum of n consecutive elements in the array */

// Time Complexity O(N^2)
// Naive Approach 
function maxSubArraySum(arr, num) {
	if (num > arr.length) {
		return null;
	}

	var max = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}

	return max;
}

// Sliding Window Approach 
// Time Complexity - O(N)
function maxSubArray(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	// Knockout case
	if (arr.length < num) return null;

	for (let i = 0; i < num; i++) {
		// maxSum = maxSum + arr[i]
		// Sum the first set of numbers to num
		maxSum += arr[i];
	}

	tempSum = maxSum;

	// Second loop starts at num
	for (let i = num; i < arr.length; i++) {
		// Temporary Sum is the addition of those numbers
		tempSum = tempSum - arr[i - num] + arr[i];
		// Compare the numbers and set the maximum Sum to maxSum
		maxSum = Math.max(maxSum, tempsum);
	}
	// Return the highest sum
	return maxSum;
}
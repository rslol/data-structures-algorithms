/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Brute Force O(n^2)
function twoSumBrute (nums, target) {
    const toReturn = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                toReturn.push(i, j);
            }
        }
    }

    return toReturn;
}

// Object approach O(n)
function twoSum(nums, target) {
    // Create an object
    let numMap = {};
    // Set the key/value pairs
    for (let i = 0; i < nums.length; i++) {
        let numKey = nums[i];
        // The key is the value of i from the array, the value is the i from the array
        numMap[numKey] = i;
    }

    // Loop through the given array again 
    for (let i = 0; i < nums.length; i++) {
        // Get the difference between the target given and the current value from the array
        let diff = target - nums[i];
        // If the difference is a key in numMap AND if that value does not equal the current index
        if (numMap.hasOwnProperty(diff) && numMap[diff] !== i) {
            // Return i and the value of the difference (whcih remeber from line 32 is an index)
            return [i, numMap[diff]];
        }
    }
}
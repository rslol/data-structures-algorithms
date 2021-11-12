/*
Given an integer array nums of unique elements, 
return all possible subsets (the power set).
The solution set must not contain duplicate subsets. 
Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] 
*/

const subsets = nums => {
    let result = []; 
    helper(nums, result, [], 0); 
    return result; 
};

const helper = (numArr, res, arr, start) => {
    const length = numArr.length;
    res.push(Array.from(arr));
    if (start === length) return;
    for (let i = start; i < length; i++) {
        arr.push(numArr[i]);
        helper(nums, res, arr, i + 1); 
        arr.pop();
    }
}
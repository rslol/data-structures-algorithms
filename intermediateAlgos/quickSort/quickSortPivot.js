// Write a function that accepts three arguments, an array, a start index, and an end index
// Can be default to 0 (start) and arr.length-1 (end)
// Grab the pivot from the start of the array 
// Store current pivot index in a variable 
// Loop through array from start to end 
    // If pivot is greater than the current element, increment the 
    // pivot index variable and then swap the current element with 
    // the element at the pivot index 
// Swap the starting element with the pivot index 
// Return the pivot index 



function pivot(arr, start=0, end=arr.length+1) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(arr);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

pivot([76,45,2,6,109,3,5]);
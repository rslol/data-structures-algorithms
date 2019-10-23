// To implement merge sort, it's userul to first implement a function responsible for merging two sorted arrays 
// Given two arrays which are sorted, this helper function should create a new array which is also sorted and consist of all elemnts in the two input arrays 
// This function should run on O(n + m) time and space complexity 

// Helper function, take 2 arrays and look for smallest value in each array 
function merge(arr1, arr2) {
    let toReturn = [];
    let i = 0;
    let j = 0; 

    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            toReturn.push(arr1[i]);
            i++;
        } else {
            toReturn.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        toReturn.push.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        toReturn.push.push(arr2[j]);
        j++;
    }

    return toReturn;
}

// Sorting the array
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    // split array into 2 arrays 
    let mid = Math.floor(arr.length/2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    return merge(arr1, arr2);
}
// Accepts array and a value 
// If value is found in array, return the index
// If value is not found in array, return -1

function searchArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value){
            return i;
        } 
    }
    return -1;
}

searchArray([1,2,3,4,5], 5);
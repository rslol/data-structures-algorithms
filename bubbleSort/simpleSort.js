// Takes an unordered array and sorts it. Array contains only numbers
const sort = (arr) => {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;                     // Helps a lot with a NEARLY SORTED array
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // The swap!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    console.log(arr);
    return arr;
}

sort ([2,5,6,21,1,103]);

// Sort array using selection sort method
const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length + 1; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        } 
        // Swap Code
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    console.log(arr);
    return arr;
}

sort([6,2,3,4,1]);
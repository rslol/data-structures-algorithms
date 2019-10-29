const sort = (arr) => {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
        let j;
        currentVal = arr[i];
        for (j = i - 1; j > -1 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
}

sort([2,1,6,12,3,77]);
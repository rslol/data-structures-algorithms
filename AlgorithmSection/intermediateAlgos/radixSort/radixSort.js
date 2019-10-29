// In order to implement radix sort, we need to build a few helper functions first 
// 1st one is getDigit, which returns the digit in num at the given place value 
// Looks at the number from right to left (opposite of normal loops)
// Assuming base 10 numbers 
function getDigit(num, place) {
    // Math.abs allows us to work with negative numbers. Ex: getDigit(-1234, 2) should return 2, not -2
    // Math.pow(10, place) is taking 10 to the place power. Ex: getDigit(1234, 2) is (1234/(10^2)) % 10
    // Math.floor removes the decimal
    // Take the remainder of the number divided by 10
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10;
}

// 2nd helper function is digitCount, which tells you how many digits are in a number. Ex: 1236 should return 4 
function digitCount(num) {
    if (num === 0) return 1;
    // Math.log10 gives us the 10 to what power gets us that number. Ex: Math.log10(100) returns 2
    // Math.floor to remove any potential decimals
    // Add the 1 to get the correct number of digits in a number
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 3rd helper function is mostDigits, returns the number of digits in the largest number in the list
function mostDigits(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // Find the max between the current count and what is returned from digitCount
        count = Math.max(count, digitCount(arr[i]));
    }
    return count;
}

// Now the actual radixSort function
function radixSort(arr) {
    // 1: Find the number with the most digits
    const mostCount = mostDigits(arr);
    // 2: Loop from zero to largest number of digits 
    for (let i = 0; i < mostCount; i++) {
        // 3: For each iteration of the loop
            // Create buckets (empty array of empty subarray) for each digit (0-9), 10 total
            let buckets = Array.from({length: 10}, () => []);
            // Place each number in each bucket it belongs to 
            for (let j = 0; j < arr.length; j++) {
                let digit = getDigit(arr[j], i);
                buckets[digit].push(arr[j]);
            }
            console.log(buckets);
            // Concat all sub arrays into a new array, spread operator allows this
            arr = [].concat(...buckets);
            console.log(arr);
    }
    return arr;
}

radixSort([1,23123,3,12,999,24]);
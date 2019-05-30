// Recursive Quiz 1: Power 
function power(base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

// Recursive Quiz 2: Factorial 
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

// Recursive Quiz 3: Product of the Array (THIS IS WRONG)
function productOfArray(arr) {
    if (!arr || arr.length === 0) return 'Not Valid';
    return arr[0] * productOfArray(arr.slice(1));
}

// Recursive Quiz 4: Recursive Range 
function recursiveRange(num) {
    let base = 0;
    let total;
    function addTo(base, top) {
        if (base === top) return total;
        total = base + addTo(base + 1);
    }

    addTo(base, num);
    return total;
}


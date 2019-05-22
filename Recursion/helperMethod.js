// Helper Method Recursion 
function collectOdd(arr) {
    let toReturn = [];
    function helper(input) {
        if (input.length === 0 || !input) {
            return 'No Input';
        }

        if (input[0] % 2 !== 0) {               // This is the start of the recursion 
            toReturn.push(input[0]);            // Push the required result into an empty array
        }

        helper(input.slice(1));                 // Call the function again with one     
    }

    helper(arr);
    console.log(toReturn);
    return toReturn;
}

collectOdd([0,1,2,3,4,5,6,7,8,9,10]);
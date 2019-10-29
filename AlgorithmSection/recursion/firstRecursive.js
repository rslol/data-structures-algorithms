// First Recursive Function 
function countdown(num) {
    if (num <= 0) {                 // This is the knockout case, if num reaches zero kill function
        console.log('All Done');
        return;
    }
    console.log(num);
    num--;
    countdown(num);                 // This is what makes it a Recursive Function, it calls itself 
}   

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}


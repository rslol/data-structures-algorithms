// First example, the very basics of a generator

// 1) To declare a generator, put an asterick symbol right after the function keyword
function* firstExample() {
    yield 1; 
    yield 2; 
    yield 3;    
}

// 2) Per convention, assign the function to the variable generator 
const generator = firstExample(); 

// 3) Using the next method, it will return an object with the properties value and done at each yield
generator.next(); // {'value': 1, 'done': false}
generator.next(); // {'value': 2, 'done': false}
generator.next(); // {'value': 3, 'done': false}
generator.next(); // {'value': null, 'done': true}



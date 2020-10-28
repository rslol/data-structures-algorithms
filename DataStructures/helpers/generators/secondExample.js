// Second example, nested generators

function* numbers() {
    yield 1; 
    yield 2; 
    yield* moreNumbers(); // Nested Generator function, declared with an asterick 
    yield 5;
}

function* moreNumbers() {
    yield 3; 
    yield 4;
}

const generator = numbers(); 
generator.next() // {'value': 1, 'done': false}
generator.next() // {'value': 2, 'done': false}
generator.next() // {'value': 3, 'done': false}
generator.next() // {'value': 4, 'done': false}
generator.next() // {'value': 5, 'done': false}
generator.next() // {'value': null, 'done': true}
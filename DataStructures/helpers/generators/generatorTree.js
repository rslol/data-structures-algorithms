// Using trees to explain generators 
class Tree {
    constructor(value = null, children = []) {
        this.value = value; 
        this.children = children;
    }

    // Asterick before method name makes this a generator
    *printValues() {
        yield this.value; 
        // Using a for/of loop
        for (let child of this.children) {
            // Recursively call this generator 
            yield* child.printValues(); 
        }
    }
}

const tree = new Tree(1, [
    new Tree(2, [new Tree(4)]), 
    new Tree(3)
]);

const values = [];
for (let value of tree.printValues()) {
    values.push(value); 
}
values;
/* 
Stack (FILO) methods 

- push(): Add a record to the stack 
- pop(): Remove the 'top' or 'newest' record in the stack 
- peek(): Return the 'top' or 'newest' record in the stack
*/

class Stack {
    constructor() {
        this.stack = [];
    }

    // Add Record to Stack
    push(record) {
        this.stack.push(record);
    }

    // Remove "Newest" Record from Stack
    pop() {
        return this.stack.pop();
    }

    // Look at "Newest" Record
    peek() {
        return this.stack[this.stack.length - 1];
    }
}

module.exports = Stack;
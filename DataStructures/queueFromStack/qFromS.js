/*
-- Directions --
Implement a Queue structure using two stacks. 
Do not create an array inside the Queue class. 
Queue should implmenet the methods 'add', 'remove', and 'peek'. 

-- Example -- 
const q = new Queue();
q.add(1);
q.add(2);
q.peek(); // returns 1
q.remove(); // returns 1
q.remove(): // returns 2

*/

const Stack = require('../stackStructure/stack'); 

class Queue {
    constructor() {
        // The container that we add data to
        this.data1 = new Stack();
        // The container that we remove (and peek) data from 
        this.data2 = new Stack();
    }

    add(data) {
        this.data1.push(data);
    }

    remove() {
        // While the first stack has data
        while (this.data1.peek()) {
            // Take the last element in the first stack and push it into the second stack
            this.data2.push(this.data1.pop());
        }
        // Get reference to the last element in the second stack
        const record = this.data2.pop();
        
        // Put everything from the second stack back into the first stack 
        while(this.data2.peek()) {
            this.data1.push(this.data2.pop());
        }

        // Return the reference of the last element in the second stack
        return record; 
    }

    // This is identical to remove(), instead of removing that with pop (line 36) instead of peek  
    peek() {
        while (this.data1.peek()) {
            this.data2.push(this.data1.pop());
        }

        const record = this.data2.peek();

        while(this.data2.peek()) {
            this.data1.push(this.data2.pop());
        }
        
        return record; 
    }
}

module.exports = Queue; 
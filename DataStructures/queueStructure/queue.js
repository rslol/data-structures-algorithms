/* 
--- Description ---
Create a queue data structure. The queue should be a class with the methods 'add' and 
'remove'. Adding to the queue should store an element until it is removed. 

--- Example --- 
const q = new Queue();
q.add(1);
q.remove(); // returns 1

-- For weave.js --
Implement a 'peek' method in this class. 
Peek should return the last element 
from the queue without removing it. 

*/

class Queue {
    constructor() {
        this.store = [];
    }

    add(data) {
        this.store.unshift(data);
    }

    remove() {
        return this.store.pop();
    }

    // Access the last element in array
    peek() {
        return this.store[this.store.length - 1];
    }
} 

module.exports = Queue; 
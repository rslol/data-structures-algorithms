/*
--- Directions --- 

Implement classes Node and Linked Lists
*/

// Steps for Node Class
// Use a constructor to accept two params, data and nextNode. 
// If nextNode is not provided, then its default value is null 
class Node {
    // Node takes 2 params, the data of the node and the node it is linked to 
    // If the second param is not provided, then the default value is null 
    constructor(data, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode; 
    }
}


class LinkedList {
    // For constructor, initialize this.head as null. This.head references to the 
    // First node of the linked list. 
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // Assign this.head to the newly created node 
        this.head = new Node(data, this.head); 
    }

    size() {
        let count = 0;
        let node = this.head;

        while(node) {
            count++;
            node = node.nextNode; 
        }

        return count; 
    }

    getFirst() {
        return this.head; 
    }

    getLast() { 
        let count = 0;
        let node = this.head

        while(node) {
            if ()
        }
    }
}

module.exports = { Node, LinkedList }; 
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
    // For constructor, initialize 'this.head' as null. 'This.head' references to the first node of the linked list. 
    constructor() {
        this.head = null;
    }

    // Insert new node at beginning of linked list 
    insertFirst(data) {
        // Assign this.head to the newly created node 
        this.head = new Node(data, this.head); 
    }

    // Figure out how many nodes are in a linked list 
    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.nextNode; 
        }

        return count; 
    }

    // Get the first node 
    getFirst() {
        return this.head; 
    }

    // Get the last node 
    getLast() { 
        let node = this.head;

        // Knockout case
        if (!node) {
            return null;
        } 

        while (node) {
            // If the next node does not exist, return current node
            if (!node.nextNode) return node;
            // else make the next node the current node
            node = node.nextNode;
        }
    }

    // Remove all nodes from the LinkedList 
    clear() {
        // Setting the newest 'this.head' node to null makes the other nodes in the linkedList non-accessible 
        this.head = null;
    }

    // Remove the first node 
    removeFirst() {
        this.head = this.head.nextNode;
    }
}

module.exports = { Node, LinkedList }; 
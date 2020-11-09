// --- Directions ---
// 1) Implement the Node class to create a binary search tree
// 2) The constructor should initialize 3 values: data, left, right
// 3) Implement the 'insert' method for the Node class
// 4) Insert should accept an argument 'data', then create and insert a new node at the appropriate location in the tree

module.exports = class Node {
    constructor(data) {
        this.data = data; 
        this.left = null; 
        this.right = null; 
    }

    insert(data) {
        // If the incoming data is less than the node's data and if there is a left (lower than parent node) child node
        if (data < this.data && this.left) {
            // Recursively insert data in the left node 
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data); 
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }

    // Search method
    contains(data) {
        // If the first node has the data, return the entire node
        if (this.data === data) return this;

        if (this.data < data && this.right) {
           return this.right.contains(data);
        } else if (this.data > data && this.left) {
            return this.left.contains(data); 
        }

        return null; 
    }
}
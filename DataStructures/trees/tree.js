// --- Directions ---
// 1) Create a node class. The constructor takes 2 parameters, data and children. Initialize children 
//    To be an empty array. The node class should have 2 methods, 'add' and 'remove'
// 2) Create a tree class. The tree constructor should take 1 parameter, root. Initialize root to be null. 
// 3) Tree should have two methods, traverseBFS (BFS = Breadth First) and traverseDFS (DFS = Depth First)
class Node {
    constructor(data, children = []) {
        this.data = data; 
        this.children = children; 
    }

    add(data) {
        const newNode = new Node(data); 
        this.children.push(newNode); 
    }

    // Remove node that has that piece of data 
    remove(data) {
        this.children = this.children.filter(i => {
            return i.data !== data; 
        }); 

    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    // Traverse Breadth First (top to bottom, left to right)
    traverseBF(fn) {
        const arr = [this.root]; 
        // Because trees use an array, we will use array methods
        while (arr.length) {
            // shift method removes the first element in an array 
            const node = arr.shift();
            // Use the spread operator to take elements into the array 
            arr.push(...node.children);
            // Call the function on the node provided
            fn(node);
        }
    }

    traverseDF(fn) {

    }
}

module.exports = { Node, Tree }; 
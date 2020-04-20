/*
--- Directions --- 

Implement classes Node and Linked Lists
*/

class Node {
    // Node takes 2 params, the data of the node and the node it is linked to 
    // If the second param is not provided, then the default value is null 
    constructor(data, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode; 
    }

    
}


class LinkedList {}



module.exports = { Node, LinkedList }; 
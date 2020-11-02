// ---- Directions ----
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return the node at the end of the first half of the list
// DO NOT use a counter variable 
// DO NOT retrieve the size of the list 
// ONLY iterate through the list 1 time

function midpoint(list) {
    let slow = list.getFirst();
    let fast = list.getFirst(); 

    while (fast.nextNode && fast.nextNode.nextNode) {
        slow = slow.nextNode;
        fast = fast.nextNode.nextNode;
    }

    return slow; 
}

module.exports = midpoint; 
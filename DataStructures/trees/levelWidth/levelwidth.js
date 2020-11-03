// --- Directions ---
// Given the root node of a tree, return an array where each element is the width of the tree at each level 
// 
// --- Example ---
// Given: 
// 0 -> 1, 2, 3
//      |     |
//      4     5
// 
// Answer: [1, 3, 2] 1 is for the root (0), 3 for its immediate children (1, 2, 3), and 2 for those children (4, 5)

// Whenever you see WIDTH in a question about trees, immediately start thinking Breadth First (top to bottom, left to right)

// root is a Node
module.exports = function levelWidth(root) {
    // The 's' is for to let us know when we reached the end of the children in this array (will become clear later on)
    const arr = [root, 's'];
    let countArr = [0];

    // Because of the 's' element, the array will never be empty. To avoid an endless loop, we make sure that the array 
    // will have more than 1 in it
    while (arr.length > 1) {
        const node = arr.shift();
        // We reached the end of that array of nodes 
        if (node === 's') { 
            countArr.push(0);
            // Put that 's' back in the array
            arr.push('s');
        } else {
            arr.push(...node.children);
            countArr[countArr.length - 1]++;
        }
    }                                  

    return countArr;
}
        
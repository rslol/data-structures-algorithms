// Given a node, validate the binray search tree, 
// ensuring that every node's left hand child is 
// less than the parent node's value, and that 
// every node's right hand child is greater than 
// the parent

// This is the function we call recursively, each time we call it we update the min value of each level 
// and the max level. If the node is not inbetween this range, throw and error 
function validate(node, min = null, max = null) {
    // Handle case of going to the left
    if (max !== null && node.data > max) return false; 
    // Handle case of going to the right
    if (min !== null && node.data < min) return false; 
    // if node.left (a smaller value) and if node.left is larger than the min
    if (node.left && !validate(node.left, min, node.data)) return false; 
    // if node.right (a larger value) and if node.right is smaller than the max
    if (node.right && !validate(node.right, node.data, max)) return false; 

    return true;
}   

module.exports = validate; 
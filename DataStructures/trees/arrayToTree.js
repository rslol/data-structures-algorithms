// Given an array of objects, and the objects have an Id and parentId property 
// Convert the array to a tree
// This method will be O(n) complexity 

const data = [
    { id: 59, parentId: 62 },
    { id: 81, parentId: 80 },
    { id: 74, parentId: null },
    { id: 76, parentId: 80 },
    { id: 63, parentId: 62 },
    { id: 80, parentId: 86 },
    { id: 87, parentId: 86 },
    { id: 62, parentId: 74 },
    { id: 86, parentId: 74 },
]

// Iterate through the data array 
//  --- REVIEW REDUCE METHOD TO UNDERSTAND ---
const idMapping = data.reduce((acc, el, i) => {
    acc[el.id] = i; 
    return acc;
}, {}); 

let root; 
data.forEach(el => {
    // If there is no parent id for a piece of data, that is the root 
    if (el.parentId === null) {
        root = el; 
        return; 
    }

    const parentEl = data[idMapping[el.parentId]];
    console.log(`Parent Element Array: ${JSON.stringify(parentEl)}`);
    parentEl.children = [...(parentEl.children || []), el];
    console.log(`Root: ${JSON.stringify(root)}`);
})

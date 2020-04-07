/* 

Goal here is to implement the 'weave' function. Weave recives two queues as arguments
and combines the contents of each into a third new queue. The third queue should 
contain the alterating content of the first two queues. The function should handle 
queues of different lengths without inserting 'undefined' into the new one. 
Don't 'access' the array inside of any queue, only use the add, remove, and peek functions. 

-- Example --
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
const queueTwo = new Queue();
queueTwo.add('hi');
queueTwo.add('there');
const q = weave(queueOne, queueTwo);
q.remove() // 1
q.remove() // 'hi'

*/

const Queue = require('./queue');

function weave(data1 , data2) {
    const q = new Queue();
    // To reduce multiple arrays into single array with alternating values, lets use reduce and concat
    // First param is the accumulator, second param is value, third is the index
    // const combined = data1.reduce((acc, val, i) => {
    //     return acc.concat(val, data2[i]);
    // }, []);

    while(data1.peek() || data2.peek())   {
        if (data1.peek()) {
            q.add(data1.remove());
        }

        if (data2.peek()) {
            q.add(data2.remove());
        }       
    }

    return q;
}

module.exports = weave; 
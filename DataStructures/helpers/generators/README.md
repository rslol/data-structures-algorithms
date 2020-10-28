Generators are a great tool in the world of Javascript. A generator is a function that can be paused and resumed. Async/await were built on generators. The next() method pauses the function at a yield and returns an object. The object has 2 properties, the value and done. 

The 'yield' keyword is relatively similar to the return keyword, except that you can have multiple yields in a generator. Once all the yield keywords are called, the following next() should return {'value': null, 'done': true}. 

--- Note: if you pass a vaule into the next method, the value passed in is automatically yielded ---

Code examples are in generatorExample.js

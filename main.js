const Stack = require("./Stack");
const Queue = require("./Queue");

const myQueue = new Queue(10);
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.push(4);
myQueue.push(5);
myQueue.push(6);
myQueue.describe();

const myStack = new Stack(10);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.describe();

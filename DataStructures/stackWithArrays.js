var stack = [];

stack.push(12);
stack.push(72);
stack.push(42);
stack.push(22);
stack.push(56);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

stack.push(90);

// We could also use shift and unshift instead of push and pop
// but that has more operational cost for shifting nd unshifting
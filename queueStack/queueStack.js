/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */


 class Stack() {
  const stack = [];

  this.push = () => {
    stack.push.apply(stack, args);
  };

  this.pop = () => {
    return stack.pop.apply(stack, args); 
  };

  this.size = () => {
    return stack.length;
  };

  this.peek = () => {
    return stack;
  };
}
  const newStack = new Stack();

  newStack.push(10, 20, 30, 40, 50, 20);
  console.log(newStack.peek());
  newStack.pop();
  console.log(newStack.peek());

 class Queue() {
  const firstStack = new Stack();
  const secondStack = new Stack();

  this.eneque = () => {
    firstStack.push.apply(firstStack, args);
  };

  this.dequeue = () => {
    if (secondStack.size === 0) {

    }
  }


 }
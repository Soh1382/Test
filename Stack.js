class Stack {
  constructor(size) {
    this.size = size;
    this.stack = [];
  }

  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }

  push(val) {
    if (this.stack.length < this.size) {
      this.stack.push(val);
      return;
    }
    console.log("Stack is full");
  }

  pop() {
    if (!this.stack[0]) {
      console.log("Stack is empty");
      return;
    }
    return this.stack.pop();
  }

  describe() {
    console.log(this.stack);
  }
}

module.exports = Stack;

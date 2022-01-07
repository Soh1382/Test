class Queue {
  constructor(size) {
    this.size = size;
    this.queue = [];
  }

  peek() {
    console.log(this.queue[0]);
  }

  push(val) {
    if (this.queue.length < this.size) {
      this.queue.unshift(val);
      return;
    }
    console.log("Queue is full");
  }

  pop() {
    if (!this.queue[this.queue.length - 1]) {
      console.log("Queue is empty");
      return;
    }
    return this.queue.pop();
  }

  describe() {
    console.log(this.queue);
  }
}

module.exports = Queue;

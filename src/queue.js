const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
      this.head = null;
      this.end = null;
      this.length = 0;
  }

  getUnderlyingList() {
      return this.head
  }

  enqueue(value) {
      const enq = new ListNode(value);
      if(this.head) {
          this.end.next = enq;
          this.end = enq;
      } else {
          this.head = enq;
          this.end = enq;
      }
      this.length++
  }

  dequeue() {
      let head = this.head.value;
      this.head = this.head.next;
      this.length--;
      return head;
  }
}
const queue = new Queue();
console.log(queue)
queue.enqueue(1);
console.log(queue)

module.exports = {
  Queue
};

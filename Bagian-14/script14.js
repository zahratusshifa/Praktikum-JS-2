class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const queue = new Queue();

queue.enqueue("Request 1");
queue.enqueue("Request 2");
queue.enqueue("Request 3");

console.log("Latihan 14.1");
console.log("Queue:", queue.items);
console.log("Elemen paling depan:", queue.peek());

console.log("Dequeue:", queue.dequeue());
console.log("Queue setelah dequeue:", queue.items);

console.log("Dequeue:", queue.dequeue());
console.log("Queue setelah dequeue:", queue.items);

console.log("Elemen paling depan sekarang:", queue.peek());
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();

stack.push("laptop");
stack.push("phone");
stack.push("tablet");

console.log("Latihan 13.1");
console.log("Stack:", stack.items);
console.log("Elemen paling atas:", stack.peek());
console.log("Pop:", stack.pop());
console.log("Stack setelah pop:", stack.items);
console.log("Apakah stack kosong?", stack.isEmpty());

const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");

console.log("Latihan 13.2");
console.log("Search history:", searchHistory.items);

const currentSearch = searchHistory.pop();

console.log("Undo search:", currentSearch);
console.log("Keyword sebelumnya:", searchHistory.peek());
console.log("Search history setelah undo:", searchHistory.items);
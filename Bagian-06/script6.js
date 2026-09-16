function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log("Latihan 6.1");
console.log(linearSearch(numbers, 30));
console.log(linearSearch(numbers, 60));

const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Smartphone", price: 800 },
    { id: 3, title: "Headphones", price: 100 }
];

function findProductById(products, id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return i;
        }
    }

    return -1;
}

console.log("Latihan 6.2");
console.log(findProductById(products, 2));
console.log(findProductById(products, 5));
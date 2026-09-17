const numbers = [5, 3, 8, 1 ];

const ascending = [...numbers].sort((a, b) => a - b);
const descending = [...numbers].sort((a, b) => b - a);

console.log("Sorting dengan sort()");
console.log("Ascending:", ascending);
console.log("Descending:", descending);

function bubbleSort(numbers) {
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log("Latihan 8.1");
console.log(bubbleSort(numbers));
console.log("Array asli:", numbers);

const products = [
    { id: 1, title: "Laptop", price: 1200, rating: 4.5 },
    { id: 2, title: "Smartphone", price: 800, rating: 4.2 },
    { id: 3, title: "Headphones", price: 100, rating: 4.7 },
    { id: 4, title: "Tablet", price: 500, rating: 4.0 },
    { id: 5, title: "Mouse", price: 50, rating: 4.8 }
];

function sortProducts(products, sortBy) {
    return [...products].sort((a, b) => {
        if (sortBy === "price") {
            return a.price - b.price;
        }

        if (sortBy === "rating") {
            return b.rating - a.rating;
        }

        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        }
    });
}

console.log("Latihan 8.2");

console.log("Berdasarkan price:");
console.log(sortProducts(products, "price"));

console.log("Berdasarkan rating:");
console.log(sortProducts(products, "rating"));

console.log("Berdasarkan title:");
console.log(sortProducts(products, "title"));
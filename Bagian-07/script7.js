function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log("Latihan 7.1");
console.log(binarySearch(numbers, 30));
console.log(binarySearch(numbers, 60));

const products = [
    { id: 1, title: "Laptop", price: 1200 },
    { id: 2, title: "Smartphone", price: 800 },
    { id: 3, title: "Headphones", price: 100 },
    { id: 4, title: "Tablet", price: 500 },
    { id: 5, title: "Mouse", price: 50 }
];

products.sort((a, b) => a.price - b.price);


console.log("Latihan 7.2");

console.log("Produk setelah diurutkan berdasarkan price:");
console.log(products);


const targetPrice = 500;

const prices = products.map(product => product.price);


const index = binarySearch(prices, targetPrice);

console.log("Target price:", targetPrice);
console.log("Index: ", index);

if (index !== -1) {
    console.log("Produk:", products[index]);
}
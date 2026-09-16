const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

const product = findProductById(products, 2);

console.log("Latihan 2.1");
console.log(product);

const lowStockProducts = products.filter(product => product.stock < 10);

console.log("Latihan 2.2");
console.log(lowStockProducts);

function updateStock(products, id, newStock) {
    return products.map(p =>
        p.id === id
            ? { ...p, stock: newStock }
            : p
    );
}

const updatedProducts = updateStock(products, 3, 10);

console.log("Latihan 2.3");
console.log(updatedProducts);
console.log("Data asli:");
console.log(products);
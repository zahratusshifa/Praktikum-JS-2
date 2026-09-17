const products = [
    { id: 1, title: "Laptop", price: 1200, category: "electronics" },
    { id: 2, title: "Smartphone", price: 800, category: "electronics" },
    { id: 3, title: "Headphones", price: 100, category: "electronics" },
    { id: 4, title: "T-Shirt", price: 25, category: "clothing" },
    { id: 5, title: "Jeans", price: 50, category: "clothing" },
    { id: 6, title: "Perfume", price: 60, category: "beauty" },
    { id: 7, title: "Face Cream", price: 30, category: "beauty" },
    { id: 8, title: "Shampoo", price: 15, category: "beauty" },
    { id: 9, title: "Rice", price: 20, category: "groceries" },
    { id: 10, title: "Milk", price: 10, category: "groceries" }
];

function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;
    }, {});
}

const groupedProducts = groupByCategory(products);

console.log("Latihan 9.1");
console.log(groupedProducts);

const categorySummary = Object.entries(groupedProducts).map(
    ([category, products]) => ({
        category: category,
        totalProducts: products.length
    })
);

console.log("Latihan 9.2");
console.table(categorySummary);
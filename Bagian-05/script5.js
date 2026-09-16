const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones"
    }
];

const laptopPrices = products
    .filter(p => p.category === "laptops")
    .map(p => p.price);

const avg = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;

console.log("Latihan 5.1");
console.log("Rata-rata harga laptop:", avg);

function getStatistics(products) {
    const totalProducts = products.length;

    const averagePrice =
        products.reduce((sum, p) => sum + p.price, 0) / totalProducts;

    const highestPrice = Math.max(...products.map(p => p.price));

    const lowestPrice = Math.min(...products.map(p => p.price));

    const totalStock =
        products.reduce((sum, p) => sum + p.stock, 0);

    const averageRating =
        products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

const statistics = getStatistics(products);

console.log("Latihan 5.2");
console.log(statistics);
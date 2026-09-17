const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "electronics",
        brand: "Dell"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "electronics",
        brand: "Apple"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "electronics",
        brand: "Sony"
    },
    {
        id: 4,
        title: "T-Shirt",
        price: 25,
        category: "clothing",
        brand: "Nike"
    },
    {
        id: 5,
        title: "Jeans",
        price: 50,
        category: "clothing",
        brand: "Levis"
    }
];

const productMap = new Map();

for (const product of products) {
    productMap.set(product.id, product);
}

console.log("Product Map:");
console.log(productMap);

console.log("Produk dengan id 2:");
console.log(productMap.get(2));

function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }

    return productMap;
}

const productLookup = buildProductLookup(products);

console.log("Latihan 12.1");
console.log(productLookup);

console.log("Cari produk dengan id 3:");
console.log(productLookup.get(3));

console.log("Cari produk dengan id 10:");
console.log(productLookup.get(10));
const products = [
    {
        id: 1,
        title: "Laptop",
        category: "electronics",
        brand: "Dell",
        tags: ["computer", "office"]
    },
    {
        id: 2,
        title: "Smartphone",
        category: "electronics",
        brand: "Apple",
        tags: ["mobile", "electronics"]
    },
    {
        id: 3,
        title: "Headphones",
        category: "electronics",
        brand: "Sony",
        tags: ["audio", "electronics"]
    },
    {
        id: 4,
        title: "T-Shirt",
        category: "clothing",
        brand: "Nike",
        tags: ["fashion", "clothing"]
    },
    {
        id: 5,
        title: "Jeans",
        category: "clothing",
        brand: "Levis",
        tags: ["fashion", "casual"]
    },
    {
        id: 6,
        title: "Smart Watch",
        category: "electronics",
        brand: "Apple",
        tags: ["wearable", "electronics"]
    }
];

const categories = [...new Set(products.map(p => p.category))];

console.log("Daftar unique category:");
console.log(categories);

const brands = [...new Set(products.map(p => p.brand))];

console.log("Daftar unique brand:");
console.log(brands);

const allTags = products.flatMap(p => p.tags);

const uniqueTags = [...new Set(allTags)];

console.log("Daftar unique tags:");
console.log(uniqueTags);
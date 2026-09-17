const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];

function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const frequency = countFrequency(words);

console.log("Latihan 10.1");
console.log(frequency);

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "electronics",
        tags: ["computer", "office"],
        rating: 4.5,
        brand: "Dell"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "electronics",
        tags: ["mobile", "electronics"],
        rating: 4.2,
        brand: "Apple"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "electronics",
        tags: ["audio", "electronics"],
        rating: 4.7,
        brand: "Sony"
    },
    {
        id: 4,
        title: "T-Shirt",
        price: 25,
        category: "clothing",
        tags: ["fashion", "clothing"],
        rating: 3.8,
        brand: "Nike"
    },
    {
        id: 5,
        title: "Jeans",
        price: 50,
        category: "clothing",
        tags: ["fashion", "casual"],
        rating: 4.1,
        brand: "Levis"
    }
];

const allTags = products.flatMap(product => product.tags);

const categoryFrequency = countFrequency(
    products.map(product => product.category)
);

const tagFrequency = countFrequency(allTags);

const ratingFrequency = countFrequency(
    products.map(product => Math.round(product.rating))
);

const brandFrequency = countFrequency(
    products.map(product => product.brand)
);

console.log("Latihan 10.2");

console.log("Frekuensi category:");
console.log(categoryFrequency);

console.log("Frekuensi tags:");
console.log(tagFrequency);

console.log("Frekuensi rating:");
console.log(ratingFrequency);

console.log("Frekuensi brand:");
console.log(brandFrequency);
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 30, height: 2, depth: 20 },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: { width: 7, height: 0.8, depth: 15 },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];

const allTags = products.map(product => product.tags);

console.log("Latihan 1");
console.log(allTags);

function findProductsByTag(products, tag) {
    return products.filter(p => p.tags.includes(tag));
}

const electronicsProducts = findProductsByTag(products, "electronics");

console.log("Latihan 2");
console.log(electronicsProducts);

const reviewCounts = products.map(product => ({
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log("Latihan 3");
console.log(reviewCounts);

const fiveStarReviews = [];

for (const product of products) {
    for (const review of product.reviews) {
        if (review.rating === 5) {
            fiveStarReviews.push(review);
        }
    }
}

console.log("Latihan 4");
console.log(fiveStarReviews);

const averageRatings = products.map(product => {
    let totalRating = 0;

    for (const review of product.reviews) {
        totalRating += review.rating;
    }

    const averageRating = totalRating / product.reviews.length;

    return {
        id: product.id,
        title: product.title,
        averageRating: averageRating
    };
});

console.log("Latihan 5");
console.log(averageRatings);

let productWithMostReviews = products[0];

for (const product of products) {
    if (product.reviews.length > productWithMostReviews.reviews.length) {
        productWithMostReviews = product;
    }
}

console.log("Latihan 6");
console.log(productWithMostReviews);

const allRatings = [];

for (const product of products) {
    for (const review of product.reviews) {
        allRatings.push(review.rating);
    }
}

console.log("Latihan 7");
console.log(allRatings);
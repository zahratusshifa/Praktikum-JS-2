const products = [
    {
        title: "Laptop",
        tags: ["computer", "office"],
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        title: "Smartphone",
        tags: ["mobile",  "electronics"],
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];


const allTags = products.flatMap(p => p.tags);

console.log("Latihan 4.1");
console.log(allTags);

const allComments = products.flatMap(p =>
    p.reviews.map(review => review.comment)
);


console.log("Latihan 4.2") ;
console.log(allComments);
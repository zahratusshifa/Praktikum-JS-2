function linearSearchWithSteps(array, target) {
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
        steps++;

        if (array[i] === target) {
            return {
                index: i,
                steps: steps
            };
        }
    }

    return {
        index: -1,
        steps: steps
    };
}

function binarySearchWithSteps(array, target) {
    let left = 0;
    let right = array.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;

        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return {
                index: mid,
                steps: steps
            };
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        index: -1,
        steps: steps
    };
}

const numbers = [];

for (let i = 1; i <= 10000; i++) {
    numbers.push(i);
}

const target = 10000;

const linearResult = linearSearchWithSteps(numbers, target);
const binaryResult = binarySearchWithSteps(numbers, target);

console.log("Latihan 16.1");
console.log("Jumlah elemen:", numbers.length);
console.log("Target:", target);

console.log("Linear Search:");
console.log("Index:", linearResult.index);
console.log("Jumlah langkah:", linearResult.steps);

console.log("Binary Search:");
console.log("Index:", binaryResult.index);
console.log("Jumlah langkah:", binaryResult.steps);

const products = [];

for (let i = 1; i <= 1000; i++) {
    products.push({
        id: i,
        title: "Product " + i,
        category: "category-" + (i % 10)
    });
}

let nestedLoopSteps = 0;
let nestedLoopPairs = [];

for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
        nestedLoopSteps++;

        if (products[i].category === products[j].category) {
            nestedLoopPairs.push([
                products[i].id,
                products[j].id
            ]);
        }
    }
}

const groupedProducts = new Map();

for (const product of products) {
    if (!groupedProducts.has(product.category)) {
        groupedProducts.set(product.category, []);
    }

    groupedProducts.get(product.category).push(product);
}

let mapSteps = 0;
let mapPairs = [];

for (const categoryProducts of groupedProducts.values()) {
    for (let i = 0; i < categoryProducts.length; i++) {
        for (let j = i + 1; j < categoryProducts.length; j++) {
            mapSteps++;

            mapPairs.push([
                categoryProducts[i].id,
                categoryProducts[j].id
            ]);
        }
    }
}

console.log("Latihan 16.2");
console.log("Jumlah produk:", products.length);

console.log("Nested Loop:");
console.log("Jumlah langkah:", nestedLoopSteps);
console.log("Jumlah pasangan kategori sama:", nestedLoopPairs.length);

console.log("Grouping dengan Map:");
console.log("Jumlah langkah:", mapSteps);
console.log("Jumlah pasangan kategori sama:", mapPairs.length);
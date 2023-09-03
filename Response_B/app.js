function dotProduct(vector1, vector2) {
    // Get the x and y components of the vectors.
    const x1 = vector1.x;
    const y1 = vector1.y;
    const x2 = vector2.x;
    const y2 = vector2.y;

    // Calculate the dot product.
    const dotProduct = x1 * x2 + y1 * y2;

    // Return the dot product.
    return dotProduct;
}

const vector1 = { x: 1, y: 2 };
const vector2 = { x: 3, y: 4 };

// Calculate the dot product.
const dotProduct = dotProduct(vector1, vector2);

// Print the dot product.
console.log(dotProduct);
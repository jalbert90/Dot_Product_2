function dotProduct(vector1, vector2) {
    return vector1.x * vector2.x + vector1.y * vector2.y;
}

const vector1 = { x: 1, y: 2 };
const vector2 = { x: 3, y: 4 };

console.log(dotProduct(vector1, vector2));
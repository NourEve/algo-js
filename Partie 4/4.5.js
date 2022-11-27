/**
 * Create a program that calculates the distance between 2 points on a plane.
 * @param {Object.<number>} [x1, y1] - coordinates of the first point.
 * @param {Object.<number>} [x2, y2] - coordinates of the second point.
 * @return {...number} result - the distance between the 2 points.
 */

function calcDistance ([x1, y1], [x2, y2]) {
    let y = x2 - x1;
    let x = y2 - y1;
    result = Math.sqrt(x * x + y * y);
    return result;
}

console.log(calcDistance([1, 1], [2, 2]));
console.log(calcDistance([1, 1], [3, 1]));
console.log(calcDistance([4, 1], [1, 1]));
console.log(calcDistance([-2, 2], [2, -2]));

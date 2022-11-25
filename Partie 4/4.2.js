/**
 * Give a random number between 1 and 10.
 * @param {number} min - The minimum value is 1.
 * @param {number} max - The maximum value is 1O.
 * @return {number} rand10 - Random number between 1 and 10.
 */

function rand10(min, max){
    return Math.random() * (max - min) + min;
}
console.log(rand10(1, 10));
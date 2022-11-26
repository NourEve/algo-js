function rand10(min, max){
    return Math.random() * (max - min) + min;
}
function multiRand(n){
    let array = [];
    for (let i=0; i < n; i++){
        array.push(rand10(1,10));
    }
    return array;
}
console.log(multiRand(5));


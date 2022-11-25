let arr1 = [1,2,3,4,5];
sum=0;
n=arr1.length;
average=0;
for(let elem of arr1) {
    sum += elem;
    average = (sum/n);
}
console.log(average);

let arr2 = [100,101,102];
sum=0;
m=arr2.length;
average=0;
for(let elem of arr2) {
    sum += elem;
    average = (sum/m);
}
console.log(average);
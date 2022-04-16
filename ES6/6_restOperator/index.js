// spread operator
function sumOne(a, b){
    return a + b;
}
var added = [3, 3];

console.log(sumOne(...added))

// using rest for more
function sumTwo(...args){
    let sum = 0;
    for(args of args){
        sum+=args;
    }
    return sum;
}
console.log(sumTwo(2, 3, 4, 6))
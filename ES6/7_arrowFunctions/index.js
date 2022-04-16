//
const add = function sum(a, b){
    return a + b;
}
console.log(add(2, 2))
document.getElementById('noArrow').innerHTML = add(2, 2)

//with Arrow
let minus = (a, b ) => {
    return a - b
}

console.log(minus(10, 4))
document.getElementById('Arrow').innerHTML = minus(10, 4)
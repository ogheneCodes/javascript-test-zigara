function add(a, b = 3){  //defalt paramenter
    return a + b
}
console.log(add(2))

//default paramenter

function animals(animal1, animal2, animal3){
    return `${animals.animal1} and ${animals.animal2} and lastly ${animals.animal3}`
}
animals.animal1 = 'cat';
animals.animal2 = 'dog'
animals.animal3 = 'Lion'

console.log(animals())
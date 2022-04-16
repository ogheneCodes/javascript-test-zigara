// spread in Arrays
const parent1 = ['John', 'Onyinye'];
const children1 = ['Mark', 'Broda', 'Kemi', 'Rose'];
const family1 = [...parent1, ...children1];

console.log(...family1);
// document.getElementById('array').innerHTML = <h3>`${family1}`</h3>
// document.write(...family1)

// spread in Object
const parent2 = {
    father: 'Uzo',
    mother: 'Janet',
    child1: 'Kunle',
    child2: 'Debo'
};

const family2 = [parent2];
console.log(...family2);
// document.getElementById('object').innerHTML = <h3>`${family2}`</h3>
console.log(...family1, ...family2);


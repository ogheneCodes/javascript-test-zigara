// for of loop one
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let car of cars) {
  text += car.length +"<br>" ;
}
console.log(`${text}`)


// for of loop two
const animals = ["Lion", "Eagle", "Cat", "Dog", "Human"];
for(let animal of animals){
    console.log(`${animal}`);
}

// using for of loop to calculate
const numbers = [2, 3, 4, 5];
for (x of numbers){
    x+=1;
    console.log(`for each, x + 1 = ${x}`);
}

const languages = ["Javascript", "Isoko", "Yoruba", "English"];
for(language of languages){
    console.log(`I speak: ${language}`)
}


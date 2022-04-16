// // Object Destructuring
// // const personalInformation = {
// //     firstName: 'Oghenemaga',
// //     lastName: 'Ebobo',
// //     city: 'Nsukka',
// //     state: 'Enugu',
// //     zipCode: 20123
// // }

// // Destructuring

// // const {firstName, lastName} = personalInformation;
// // console.log(`${firstName} ${lastName}`);

// // object Destructuring
const person = {
  firstName: "Elon",
  lastName: "Zuckerberg",
  age: 60,
  color: "Yellow",
  gender: "Female",
};

const { firstName, lastName, age, color, gender } = person;
console.log(
  `${firstName} ${lastName} is not ${age}years but he has a skin color of ${color} and he is a ${gender}`
);
// document.getElementById('displayObj1').innerHTML = `${firstName} ${lastName} is not ${age}years but he has a skin color of ${color} and he is a ${gender}`



// // object Destructuring with a function
const person2 = {
  firstName2: "Oghene",
  lastName2: "Max",
  age2: 30,
  color2: "Dark",
  gender2: "Male",
  action(){
    console.log(`${this.firstName2} ${this.lastName2} is not ${this.age2}years but he has a skin color of ${this.color2} and he is a ${this.gender2}`);
    // document.getElementById('displayObj2').innerHTML = `${this.firstName2} ${this.lastName2} is not ${this.age2}years but he has a skin color of ${this.color2} and he is a ${this.gender2}`;
   
  }
};
person2.action();
// console.log(person2.action());
// document.getElementById('displayObj2').innerHTML = person2.action();


// // Array Destructuring
 let number = [100, 200, 300];  //Array of numbers

 let [one, two, three] = number; //destructured arrays of number
 console.log(one, two, three);
//  document.getElementById('displayArray1').innerHTML = one, two, three;

 
// //  array destructuring with function
function school(){  
  return ['UNN', 'DELSU'];  
}

let [sch1, sch2]  = school();
console.log(sch1, sch2, sch3 = 'ABU', sch4 = 'AWKA')
// document.getElementById('displayArray2').innerHTML = sch1, sch2, sch3 = 'ABU', sch4 = 'AWKA';

// // array destructuring with function and value
function calculate(a, b){
  const add = a + b;
  const minus = a - b;
  const divide = a / b;
  const remender = a % b;
  const multiply = a * b;
  return [add, minus, divide, remender, multiply];
}
// const [add, minus, divide, remender, multiply] = calculate( 2, 2)
console.log([add, minus, divide, remender, multiply] = calculate( 2, 2));

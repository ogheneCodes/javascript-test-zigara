class user{
    constructor(name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;
    }
    getSummary(){
        return `${this.name} is ${this.age}years and is ${this.color} in color`; 
    }
}

const Max = new user('Max', 'Black', 28);
const Dan = new user('Dan', 'yellow', 34);
const Kosi = new user('Kosi', 'Green', 29);

console.log(Max.getSummary());
console.log(Dan.getSummary());
console.log(Kosi.getSummary());


// variable declarations

const name1 = [];
name1.push('Max')
console.log(name1);

let name2 = [];
name2.push('Brad')
console.log(name2)

var name3 = [];
name3.push('John');
console.log(name3);



// class Teacher{
//     constructor(name, age, classsize){
//         this.name = name;
//         this.age = age;
//         this.classsize = classsize;
//     }
// }
// class Student{
//     constructor(name, age, cgpa){
//         this.name = name;
//         this.age = age;
//         this.cgpa = cgpa
//     }
// }

// const teacher1 = new Teacher('Max', 21, '30')
// const teacher2 = new Teacher('John', 33, '24')
// const student1 = new Student('Taiwo', 33, '3.0')
// const student2 = new Student('Shola', 23, '4.0')

// console.log(teacher1);
// console.log(teacher2);
// console.log(student1);
// console.log(student2)



// Using super() for constructor to write less codes

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person{
    constructor(name, age, classsize){
        super(name, age);
        this.classsize = classsize;
    }
}
class Student extends Person{
    constructor(name, age, cgpa){
        super(name, age);
        this.cgpa = cgpa
    }
}

const teacher1 = new Teacher('Max', 21, '30')
const teacher2 = new Teacher('John', 33, '24')
const student1 = new Student('Taiwo', 33, '3.0')
const student2 = new Student('Shola', 23, '4.0')

console.log(teacher1);
console.log(teacher2);
console.log(student1);
console.log(student2)
document.write(`${teacher1.name} is ${teacher1.age} and has a class of ${teacher1.classsize} students` + '<br>')
document.write(`${teacher2.name} is ${teacher2.age} and has a class of ${teacher2.classsize} students` + '<br>')
document.write(`${student1.name} is ${student1.age} and has a CGPA of ${student1.cgpa}` + '<br>')
document.write(`${student2.name} is ${student2.age} and has a CGPA of ${student2.cgpa}`)




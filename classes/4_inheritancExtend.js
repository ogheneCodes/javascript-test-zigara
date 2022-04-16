class Animal{
    constructor(name, color, eyes){
        this.name = name;
        this.color = color;
        this.eyes = eyes;
    }
    eat (){
        console.log('This Animal is eating Now!')
    }
}
class Cat extends Animal{
run(){
    console.log('this cat is running');
}
}
class Dog extends Animal{
barking(){
    console.log('this dog is backing');
}
}
class Monkey extends Animal{
jumping(){
    console.log('this monkey is jumping');
}
}
// intantiate the classes
let cat = new Cat('cat', 'red', '2');
let dog = new Dog();
let monkey = new Monkey();
cat.run();
dog.barking();
monkey.jumping();
cat.eat();


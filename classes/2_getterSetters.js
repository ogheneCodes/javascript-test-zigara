// using object for getter and setter

const person = {
    firstName: 'Oghene',
    lastName: 'Ebobo',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'John Doe'
console.log(person);

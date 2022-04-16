class user{
    constructor( username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    getSummary(){
        // console.log(this.username +" "+ this.email + " "+"and" +" "+ this.password + " "+"are registered") 
        console.log(`${this.username} with email ${this.email} and password of ${this.password} is registered`)
    }
}

const max = new user('Max', 'ebo@gmail.com', '123');
const John = new user('John', 'baba@gmail.com', '113');
console.log(max.getSummary());
console.log(John.getSummary());



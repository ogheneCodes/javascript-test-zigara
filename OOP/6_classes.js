class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `This book, ${this.title} was written by ${this.author} in ${this.year}`
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} Years old`;
        }

        revise(newYear){
            this.year = newYear;
            this.revised = true;
        }
        static topBookStore(title, author){
            // return 'Javascript Intro';
            this.title = 'javascript intro';
            this.author = 'oghenemaga';
            return `${this.title} by ${this.author}`
        }
}
// Instatiate Object
const book1 = new Book('Java', 'Max', 2021)
console.log(book1);
book1.revise('2013');
console.log(book1);
console.log(Book.topBookStore());

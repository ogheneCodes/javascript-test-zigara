//Constructor
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

class Book{
    constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    }
}
// Book Prototypes
Book.prototype.summary = function(){
    return `This book, ${this.title} was written by ${this.author} in ${this.year}`
};
// Intitializing
const Book1 = new Book("Web3", "Max", 2022)
const Book2 = new Book("java", "Mac", 2021)

console.log(Book1.summary())
console.log(Book2)
document.write(Book1.summary() + '<br>')
document.write(`${Book2.title}, ${Book2.author}, ${Book2.year}`)
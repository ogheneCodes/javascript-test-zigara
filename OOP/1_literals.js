// Literal
const Book1 = {
    title: "Intro to Web3",
    author: "MaxBobo",
    year: 2022,
    summary: function(){
        return `This book, ${this.title} was written by ${this.author} in ${this.year}`
    }
}

const Book2 = {
    title: "Intro to OOP",
    author: "OgheneCode",
    year: 2021,
    summary: function(){
        return `This book, ${this.title} was written by ${this.author} in ${this.year}`
    }
}
console.log(Book1.summary());
console.log(Book2);

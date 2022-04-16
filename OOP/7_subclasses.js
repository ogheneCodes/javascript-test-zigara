class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `This book, ${this.title} was written by ${this.author} in ${this.year}`
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, month, year){
        super(title, author, year);
        this.month = month;
    }
    // getSummary(){
    //     return `this is a ${title} done by ${author} in ${month}, ${year}`;
    // }
}

// intantiate Magazine
const mag1 = new Magazine('intro to web3', 'james Doe', 'Feb', '2021')
console.log(mag1);
console.log(mag1.getSummary())


const bookProtos = {
    getSummary:function(){
        return `This book, ${this.title} was written by 
        ${this.author} in ${this.year}`;
    }, 
getAge(){
const years = new Date().getFullYear() - this.year;
return `${this.title} is ${years} Years old`;
}
};

// Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';
book1.year = '2013';
console.log(book1);
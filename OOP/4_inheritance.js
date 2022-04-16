//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  // Book Prototypes
  summary = function () {
    return `This book, ${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// using inheritance
// Magazine constructor

function Magazine(title, author, month, year) {
  Book.call(this, title, author, year);
  this.month = month;
}
// //inheritance prototype
// Magazine.prototype = object.create(Book.prototype);

// // Instantiate Magazine object
const mag1 = new Magazine("So good", "John Doe", "March", "2022");

// // use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);
console.log(summary());
document.write(`${mag1.title}, ${mag1.author}, ${mag1.month}, ${mag1.year}`);

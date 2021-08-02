//Constructor
function Book(title, author, year) {
    console.log('Book Initialized');
    this.title = title;
    this.author = author;
    this.year = year;
}

//during protptype dont use fat arrow
Book.prototype.getSummary = function () {
    return `${this.title} is writen by ${this.author}`
}

Book.prototype.getAge = function () {
    const age = new Date().getFullYear() - this.year;
    return `${this.title} is  ${age} old`
}

Book.prototype.revise = function (newYear) {
    this.year = newYear;
}

//Instantiate object
const book1 = new Book('book one', 'Jhon Doe', 2013);
const book2 = new Book('book two', 'Jhon Doe', 2013);

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
console.log(book1.revise(2018));
console.log(book1.getAge());
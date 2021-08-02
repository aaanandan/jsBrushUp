//Constructor
function Book(title, author, year) {
    console.log('Book Initialized');
    this.title = title;
    this.author = author;
    this.year = year;
}

//Instanciate Magaizine Object
Magazine.prototype = Object.create(Book.prototype);

//during protptype dont use fat arrow
Book.prototype.getSummary = function () {
    return `${this.title} is writen by ${this.author}`
}

Magazine.prototype.Constructor = Magazine;

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}


const magazine = new Magazine('Mag one', 'Jhon doe', '1990', 'January');
console.log(magazine);
console.log(magazine.getSummary());


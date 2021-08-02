//Constructor
function Book(title, author, year) {
    console.log('Book Initialized');
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = () => {
        return `${this.title} is writen by ${this.author}`
    }
}


//Instantiate object
const book1 = new Book('book one', 'Jhon Doe', 2013);

const book2 = new Book('book two', 'Jhon Doe', 2013);

console.log(book1);
console.log(book1.getSummary());

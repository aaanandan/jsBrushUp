class Book {

    constructor(title, author, year) {
        this.title = title;
        this.year = year;
        this.author = author;
    }

    getSummary() {
        return `${this.title} is writen by ${this.author}`
    }

    getAge() {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is  ${age} old`
    }

    revise(newYear) {
        this.revised = true;
        return this.year = newYear;
    }
    static topBookStore() {
        return 'Barens and wise'
    }
}

//Instantiate Object
const book1 = new Book('Book one', 'Jhon Doe', 2015);
console.log(book1);
book1.revise(2018);
console.log(book1);
console.log(Book.topBookStore());


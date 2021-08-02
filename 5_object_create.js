const bookProtos = {
    getSummary: function () {
        return `${this.title} is writen by ${this.author}`
    },

    getAge: function () {
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is  ${age} old`
    }


}

const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.year = '2013';
book1.author = 'Jhon doe';

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
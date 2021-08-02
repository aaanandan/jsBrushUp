//// 1)Literals
// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert(1);
// console.log(navigator.appVersion)

const book1 = {
    title: 'Book one',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return ` ${this.title} is writen by ${this.author}`
    }
}

const book2 = {
    title: 'Book two',
    author: 'John Doe',
    year: '2016',
    getSummary: function () {
        return ` ${this.title} is writen by ${this.author}`
    }
}

console.log(book1.getSummary());
console.log(book2.getSummary());

console.log(Object.values(book1));
console.log(Object.keys(book1));
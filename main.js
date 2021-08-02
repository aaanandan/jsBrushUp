
//NOTE: this JS will not to run as is, to run, comment all sections except the one you want to run. and open index.htm in your browser

//1) Console
console.log('hello');
console.error('error');
console.warn(); ('warning');
//--------------------------------------------------------------------------------------------------------------------


//2)let,const
const age = 30;
console.log(age);
//--------------------------------------------------------------------------------------------------------------------

let score = 0;
score = 2
console.log(score);
//--------------------------------------------------------------------------------------------------------------------

//3) Datatypes
String, number
const name = 'Jhon';
const age = 30;
const rating = 4.5
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);
//--------------------------------------------------------------------------------------------------------------------


//4) Concatenation
const name = 'Jhon';
const age = 30;
console.log('My name is ' + name + ' and I am ' + age);

//5) Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);
//--------------------------------------------------------------------------------------------------------------------

//6)String
const s = 'Hellow word!';
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(' ', 1));
//--------------------------------------------------------------------------------------------------------------------

// 7) Arrays
let fruits = ['apples', 'oranges', 'pears', 10, true];

//using cosnt array will be apt, as we will not reassing array

console.log(fruits);

fruits[5] = 'grapes';

fruits.push('mangos'); //add last
fruits.unshift('strawaberry') //add first
fruits.pop() //take the last element out

console.log(fruits[1]);
//--------------------------------------------------------------------------------------------------------------------

//8) Objects
const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    age: '30',
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'jhon@email.com'
console.log(person)
console.log(person.firstName, person.hobbies[1], person.address['city']);

const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
]
console.log(todos);
console.log(todos[1].text)

//freeformater.com
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)
//--------------------------------------------------------------------------------------------------------------------


// 9)Loops - For
for (let i = 0; i < 10; i++) {
    console.log(`For loop Number:${i}`);
}

//while
let i = 0;
while (i < 10) {
    console.log(`While Loop number :${i}`)
    i++;
}

for (todo of todos) {
    console.log(todo.text)
}

todos.forEach((todo) => {
    console.log(todo);
});

todoText = todos.map((todo) => todo.text);
console.log(todoText);
todoCompletedText = todos.filter(todo => {
    return todo.isCompleted === true
}).map(todo => todo.text);
console.log(todoCompletedText);
//--------------------------------------------------------------------------------------------------------------------

//11)condtionals
const x = 11;

if (x == 10) console.log('x is equal to 10');
else console.log('x is not = 10') // == only check for value

if (x === 10) console.log('x is equal to 10');
else console.log('x is not equal to 10') // === cheks for same type as well

if (x === 10) console.log('x is equal to 10');
else if (x > 10) {
    console.log('x is greater than 10')
} else console.log('x is not equal to 10') // === cheks for same type as well


const y = 11;
if (x > 5 || y > 10) {
    console.log('x is more then 5 or y is more than 10');
}

const color = 'green';  //x > 10 ? 'red' : 'blue';
console.log(color);

switch (color) {
    case 'red': console.log('color is red'); break;
    case 'blue': console.log('color is blue'); break;
    default: console.log('color is nor red or blue'); break;
}
//--------------------------------------------------------------------------------------------------------------------

// 12)Functions
function addNum(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
}
addNum();

const addNums = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums(5, 5));

const addFive = num1 => num1 + 5;
console.log(addFive(5))
//--------------------------------------------------------------------------------------------------------------------

//13) Object
function PersonES2015(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function () {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
}


PersonES2015.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
}

PersonES2015.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}


class PersonES2016 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear = function () {
        return this.dob.getFullYear();
    }

    getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person3 = new PersonES2016('myFirstName', 'myLastName', '10-11-1980');
console.log(person3);

const person1 = new PersonES2015('Jhon', 'Doe', '4-3-1980');
const person2 = new PersonES2016('Krish', 'Hari', '3-6-1970');

console.log(person1);
console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
//--------------------------------------------------------------------------------------------------------------------

//14) DOM
//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('ul'));

//multile elements
document.querySelectorAll('.item').forEach((item) => console.log(item));

const ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';
//--------------------------------------------------------------------------------------------------------------------

//15) EventListener
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    console.log(e.target, 'clicked');
});

btn.addEventListener('hover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    console.log(e.target, 'clicked');
});

btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    console.log(e.target, 'clicked');
});


//16) Application

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please Enter Fields');
        msg.innerHTML = 'Please Enter Fields';
        msg.classList.add('error');
        setTimeout(() => { msg.remove() }, 3000)
    } else {

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //Clear Fields  
        nameInput.value = '';
        emailInput.value = '';
    }
    console.log(nameInput.value);
}

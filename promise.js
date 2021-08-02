let posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error:something went wrong');
            }
        }, 2000);
    });
}

getPosts();
createPost({ title: 'Post Three', body: 'This is Post three' })
    .then(getPosts)
    .catch(err => console.log(err));

async function init() {
    createPost({ title: 'Post Four', body: 'This is post three' });
    getPosts();
}

init();

//Async await with fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'GoodBye')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
Promise.all([promise1, promise2, promise3, promise4]).then(r => console.log('All resolved', r));


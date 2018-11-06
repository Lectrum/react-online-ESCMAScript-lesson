const user = {
    name: 'Jon',
    age:  21,
};

let name = null;
let age = null;

({ name, age } = user);
console.log('→ name:', name);
console.log('→ age: ', age);

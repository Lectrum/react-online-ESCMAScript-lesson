const user = {
    name: 'Jon',
    age:  21,
};

let name = null;
let age = null;

console.log('→ name:', name);
console.log('→ age: ', age);

/**
 * Это — деструктуризация «на лету».
 * Такой приём гибок, хотя на практике используется достаточно редко.
 * Но о нём полезно знать.
 */
({ name, age } = user);

console.log('→ name:', name);
console.log('→ age: ', age);

'use strict';

const user = {
    name: 'Jon',
    age: 21,
};

let name;
let age;

{ name, age } = user;
console.log('name', name)

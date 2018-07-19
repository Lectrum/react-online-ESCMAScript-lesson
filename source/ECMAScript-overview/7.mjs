'use strict';

const user1 = { name: 'Jon', car: 'Ford' };
const user2 = { name: 'Joe', car: 'Audi' };

const user = { ...user1, ...user2 };

console.log(user);

const profile = { firstName: 'Walter', lastName: 'White' };
const items = { car: 'audi', phone: 'nokia' };

const user1 = Object.assign({}, profile, items);
const user2 = { ...profile, ...items };

console.log(user1);
console.log(user2);

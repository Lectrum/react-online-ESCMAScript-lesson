const user = {
    firstName: 'Walter',
    lastName:  'White',
    car:       'audi',
    phone:     'nokia',
};
const food = [ 'apple', 'orange', 'banana', 'onion', 'cabbage', 'carrot' ];

// rest → остаток, остаточные
const { firstName, lastName, ...restUser } = user;
const [ firstFood, secondFood, ...restFood ] = food;

console.log(firstName, lastName, restUser);
console.log(firstFood, secondFood, restFood);

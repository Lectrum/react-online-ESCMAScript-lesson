const user = {
    firstName: 'Walter',
    lastName:  'White',
    car:       'audi',
    phone:     'nokia',
};
const food = [ 'apple', 'orange', 'banana', 'onion', 'cabbage', 'carrot' ];

/**
 * В данном случае мы не распределяем свойства одной структуры по другой структуре.
 * Здесь мы собираем остаточные свойства объекта и массива в соответствующие переменные.
 * Поэтому в этой ситуации оператор ... нужно называть rest.
 * От английского слова rest — остаток, остаточный.
 */
const { firstName, lastName, ...restUser } = user;
const [ firstFood, secondFood, ...restFood ] = food;

console.log(firstName, lastName, restUser);
console.log(firstFood, secondFood, restFood);

/* И снова rest — собираем параметры функции в массив. */
const numbers = (num1, ...params /* [ 2, 3, 4, 5 ] */) => {
    console.log(num1);
    console.log(params);
};

numbers(1, 2, 3, 4, 5);

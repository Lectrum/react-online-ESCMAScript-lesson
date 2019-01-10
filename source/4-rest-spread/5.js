// rest → остаток, остаточные
const numbers = (num1, ...params /* [ 2, 3, 4, 5 ] */) => {
    console.log(num1);
    console.log(params);
};

numbers(1, 2, 3, 4, 5);

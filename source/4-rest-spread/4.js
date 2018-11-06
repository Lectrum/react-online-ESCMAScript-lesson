const numbers = (num1, ...params) => {
    console.log(params);
};

numbers(1, 2, 3, 4, Infinity);

'use strict';
const sum = (a, b, c) => {
    console.log(a + b + c); // 15
};
const data = [2, "3", 4];

sum(10, ...data);

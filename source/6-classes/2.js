'use strict';

class Human {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

const jack = new Human('Jack');

jack.sayName();

console.log('→ jack', jack);

console.log(
    'Object.getPrototypeOf(jack).sayName',
    Object.getPrototypeOf(jack).sayName,
);

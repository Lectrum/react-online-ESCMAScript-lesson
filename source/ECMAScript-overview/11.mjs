'use strict';

class PersonClass {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
}

const jon = new PersonClass('Jon');

jon.name = 'Joe';
jon.sayName();

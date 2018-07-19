'use strict';

class PersonClass {
    constructor(name) {
        this.name = name;
    }

    create(name) {
        this.name = name;
    }

    static create(name) {
        return new PersonClass(name);
    }
}

const joe = new PersonClass('Joe');

console.log(PersonClass.create, joe.create);

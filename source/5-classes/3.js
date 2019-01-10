class Human {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return this.name;
    }
}

class Programmer extends Human {
    constructor(name) {
        super(name);
    }

    sayName() {
        console.log(`I am ${super.sayName()} and I am programmer.`);
    }
}

const vova = new Programmer('Vova');

vova.sayName();

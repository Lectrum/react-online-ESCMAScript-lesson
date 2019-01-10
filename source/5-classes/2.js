class Human {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

const jack = new Human('Jack');
const bob = new Human('Bob');

jack.sayName();
bob.sayName();

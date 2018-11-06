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
    '→ sayName in jack prototype:',
    Object.getPrototypeOf(jack).sayName,
);

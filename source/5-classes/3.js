class Human {
    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    sayName = () => {
        console.log(this.name);
    };

    sayJob() {
        console.log(this.job);
    }
}

const jack = new Human('Jack', 'programmer');

jack.sayName();
jack.sayJob();

console.log('→ jack', jack);

console.log(Object.getPrototypeOf(jack).sayName);
console.log(Object.getPrototypeOf(jack).sayJob);

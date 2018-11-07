class Human {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

class Programmer extends Human {
    constructor(name, skills) {
        super(name);

        this.skills = skills;
    }

    saySkills() {
        console.log(this.skills);
    }
}

const jack = new Programmer('Jack', [ 'JavaScript', 'HTML', 'CSS', 'React' ]);

jack.sayName();
jack.saySkills();

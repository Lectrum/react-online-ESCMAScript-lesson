'use strict';

class Human {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

class Programmer extends Human {
    MY_STATUS = 'I am learning.';

    constructor(name, skills) {
        super(name);

        this.skills = skills;
    }

    saySkills() {
        for (const skill of this.skills) {
            console.log(skill);
        }
    }

    sayStatus() {
        console.log(this.MY_STATUS);
    }
}

const jack = new Programmer('Jack', ['JavaScript', 'HTML', 'CSS', 'React']);

jack.sayName();
jack.saySkills();
jack.sayStatus();

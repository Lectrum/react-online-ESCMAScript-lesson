const user = {
    name:   'Vova',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'React', 'Webpack' ],
};

const name = user.name;
const skills = user.skills;
const firstSkill = skills[ 0 ];
const secondSkill = skills[ 1 ];

console.log('→ name:       ', name);
console.log('→ skills:     ', skills);
console.log('→ firstSkill: ', firstSkill);
console.log('→ secondSkill:', secondSkill);

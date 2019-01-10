const user = {
    name:   'Vova',
    skills: [ 'JavaScript', 'HTML', 'CSS', 'React', 'Webpack' ],
};

const { name, skills } = user;
const [ firstSkill, secondSkill ] = skills;

console.log('→ name:       ', name);
console.log('→ skills:     ', skills);
console.log('→ firstSkill: ', firstSkill);
console.log('→ secondSkill:', secondSkill);

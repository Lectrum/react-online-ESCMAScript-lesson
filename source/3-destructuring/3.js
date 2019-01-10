const user = {
    name: {
        first: 'Vova',
        last:  'Petrenko',
    },
    skills: [ 'JavaScript', 'HTML', 'CSS', 'React', 'Webpack', 'Node' ],
    city:   'Berlin',
    planet: 'Earth',
};

const {
    name: { first, last },
    skills: [ , , , firstSkill, secondSkill ],
} = user;

console.log('→ first, last', first, last);
console.log('→ skills', firstSkill, secondSkill);

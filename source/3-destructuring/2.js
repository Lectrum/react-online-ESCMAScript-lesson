const user = {
    name: {
        en: {
            first:  'Jon',
            skills: [ 'JavaScript', 'HTML', 'CSS', 'React', 'Webpack' ],
        },
    },
    city:   'Berlin',
    planet: 'Earth',
};

const {
    name: {
        en: {
            first,
            skills: [ , , , firstSkill, secondSkill ],
        },
    },
} = user;

console.log('→ first ', first);
console.log('→ skills', firstSkill, secondSkill);

const user = {
    name:   { first: 'Vova', last: 'Petrenko' },
    skills: [ 'JavaScript', 'HTML', 'CSS', 'React', 'Webpack', 'Node' ],
    city:   'Berlin',
    planet: 'Earth',
};

/**
 * Деструктуризация — очень гибкая.
 * Например: можно деструктурировать глубоко вложенные свойства.
 * А при деструктуризации массивов можно пропускать не нужные значения.
 */
const {
    name,
    name: { first, last },
    skills: [ , , , firstSkill, secondSkill ],
} = user;

console.log('→ name:       ', name);
console.log('→ first, last:', first, last);
console.log('→ skills:     ', firstSkill, secondSkill);

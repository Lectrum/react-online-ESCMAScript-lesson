const profile = { firstName: 'Vova', lastName: 'Petrenko' };
const items = { car: 'audi', phone: 'nokia' };

// spread → распределить, распылить
const user1 = { ...profile, ...items };

console.log(user1);

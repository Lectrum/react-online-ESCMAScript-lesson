const profile = { firstName: 'Vova', lastName: 'Petrenko' };
const items = { car: 'audi', phone: 'nokia' };

/**
 * Здесь мы тоже распределяем свойства, только теперь — по объекту.
 */
const user1 = { ...profile, ...items };

console.log(user1);

/**
 * С помощью ключевого слова as можно прямо в инструкции импорта
 * привязывать именованные экспорты к идентификатору с другим именем.
 */
import { a as b, b as a, c as d } from './source';

const c = 4;

console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('d', d);

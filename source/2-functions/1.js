const f1 = (n) => {
    return n * 2;
};

const f2 = (n) => n * 2;
const f3 = (n) => ({ value: n * 2 });
const f4 = (n = 40) => n * 2;

console.log('→ f1:', f1(1));
console.log('→ f2:', f2(2));
console.log('→ f3:', f3(3));
console.log('→ f4:', f4());

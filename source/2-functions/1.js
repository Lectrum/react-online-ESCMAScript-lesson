function f1(n) {
    const a = n * 2;
    const b = a ** 3;

    return b;
}

const f2 = (n) => {
    const a = n * 2;
    const b = a ** 3;

    return b;
};

const f3 = (n) => n ** 2;
const f4 = (n) => ({ value: n ** 2 });
const f5 = (n = 40) => n ** 2;

console.log('→ f1:', f1(1));
console.log('→ f2:', f2(1));
console.log('→ f3:', f3(3));
console.log('→ f4:', f4(4));
console.log('→ f5:', f5());

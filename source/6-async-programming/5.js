/**
 * ES2017
 * Async functions — https://github.com/tc39/ecmascript-asyncawait
 **/

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const f3 = async () => {
    await delay();
    console.log('→ third');
};
const f2 = async () => {
    await delay();
    console.log('→ second');

    return f3();
};
const f1 = async () => {
    console.log('→ start');
    await delay();
    console.log('→ first');

    return f2();
};

(async () => {
    await /* f3() */ await /* f2() */ await f1();

    console.log('🏁');
})();

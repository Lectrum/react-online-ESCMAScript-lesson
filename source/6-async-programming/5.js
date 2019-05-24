/**
 * ES2017
 * Async functions — https://github.com/tc39/ecmascript-asyncawait
 **/

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const f3 = async () => {
    await delay();
    console.log('→ 4');
};
const f2 = async () => {
    await delay();
    console.log('→ 3');

    return f3;
};
const f1 = async () => {
    console.log('→ 1');
    await delay();
    console.log('→ 2');

    return f2;
};

(async () => {
    const f2 = await f1();
    await f2();

    // (await /* f3() */ (await /* f2() */ await f1())())();
})();

/**
 * ES2017
 * Async functions — https://github.com/tc39/ecmascript-asyncawait
 **/

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    console.log('→ 1');

    await delay();

    console.log('→ 2');

    await delay();

    console.log('→ 3');

    await delay();

    console.log('→ 4');
})();

/**
 * ES2017
 * Async functions — https://github.com/tc39/ecmascript-asyncawait
 **/

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    console.log('→ start');

    await delay();

    console.log('→ first pass');

    await delay();

    console.log('→ second pass');

    await delay();

    console.log('→ third pass');
};

start();

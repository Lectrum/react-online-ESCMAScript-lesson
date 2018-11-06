const delay = (duration = 1000) => new Promise((resolve) => {
    setTimeout(resolve, duration);
});

const f3 = async () => {
    await delay();
    console.log('→ third pass');
};
const f2 = async () => {
    await delay();
    console.log('→ second pass');

    return f3();
};
const f1 = async () => {
    console.log('→ start');
    await delay();
    console.log('→ first pass');

    return f2();
};

(async () => {
    await await await f1();

    console.log('🏁');
})();

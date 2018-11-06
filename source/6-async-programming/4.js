const delay = (duration = 1000) => new Promise((resolve) => {
    setTimeout(resolve, duration);
});

(async () => {
    console.log('→ start');

    await delay();

    console.log('→ first pass');

    await delay(2000);

    console.log('→ second pass');

    await delay(3000);

    console.log('→ third pass');
})();

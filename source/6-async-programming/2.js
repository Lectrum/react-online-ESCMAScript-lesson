const delay = (duration = 1000) => new Promise((resolve) => {
    setTimeout(resolve, duration);
});

console.log('→ start');

delay()
    .then(() => {
        console.log('→ first pass');

        return delay(2000);
    })
    .then(() => {
        console.log('→ second pass');

        return delay(3000);
    })
    .then(() => {
        console.log('→ third pass');
    });

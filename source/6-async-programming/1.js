const delay = (duration = 1000) => new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
});

console.log('→ start');

delay(2000).then(() => {
    console.log('→ success');
});

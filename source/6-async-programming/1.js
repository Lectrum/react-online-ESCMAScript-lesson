const delay = (duration = 1000) => new Promise((resolve) => {
    setTimeout(resolve, duration);
});

console.log('→ start');

delay().then(() => {
    console.log('→ success');
});

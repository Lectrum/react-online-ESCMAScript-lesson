const delay = (ms = 1000) => {
    return new Promise((resolve) => {
        console.log('→ start');

        setTimeout(() => resolve(), ms);
    });
};

delay(2000).then(() => {
    console.log('→ done');
});

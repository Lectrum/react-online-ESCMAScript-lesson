const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

// Лучше, чем на коллбеках, однако....
const init = () => {
    console.log('→ first');

    delay().then(() => {
        console.log('→ second');

        return delay().then(() => {
            console.log('→ third');

            return delay().then(() => {
                console.log('→ fourth');

                return delay().then(() => {
                    console.log('→ fifth');
                });
            });
        });
    });
};

init();

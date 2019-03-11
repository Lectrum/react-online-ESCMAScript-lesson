const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const init = () => {
    /**
     * В целом, промисы задумывались как приём асинхронного программирования нового поколения.
     * И они действительно хороши, кроме одного побочного эффекта, который не удалось
     * предусмотреть при разработке дизайна промисов.
     * Это — promise hell.
     */
    console.log('→ 1');

    delay().then(() => {
        console.log('→ 2');

        return delay().then(() => {
            console.log('→ 3');

            return delay().then(() => {
                console.log('→ 4');

                return delay().then(() => {
                    console.log('→ 5');
                });
            });
        });
    });
};

init();

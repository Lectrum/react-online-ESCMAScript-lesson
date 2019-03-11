/**
 * ES2017
 * Async functions — https://github.com/tc39/ecmascript-asyncawait
 **/

const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    /**
     * Поэтому придумали лаконичный синтаксис async/await.
     * Инструкции всегда идут вертикально, что упрощает чтение кода и его отладку.
     * «Под капотом» у async/await — промисы.
     */
    console.log('→ 1');
    await delay();
    console.log('→ 2');
    await delay();
    console.log('→ 3');
    await delay();
    console.log('→ 4');
};

start();

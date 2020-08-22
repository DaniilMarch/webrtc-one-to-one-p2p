require('./src/config')();
const Engine = require('./src/engine');

(async () => {
    const engine = new Engine();
    await engine.start();
})();

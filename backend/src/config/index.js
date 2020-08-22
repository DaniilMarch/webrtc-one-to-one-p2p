const config = {
    port: process.env.PORT || 3001,
}

module.exports = () => global.config = config;

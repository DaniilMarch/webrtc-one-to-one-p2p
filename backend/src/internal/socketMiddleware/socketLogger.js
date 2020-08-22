
async function socketLogger(args, next) {
    const now = new Date();
    console.log(`[${now.toString()}] ${args[0]}`);
    next();
}

module.exports = socketLogger;

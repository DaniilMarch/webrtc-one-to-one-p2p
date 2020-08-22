const routeAccessControls = require('../socketRoutes/access');

async function socketLogger([method, data, cb], next) {
    const isAllowed = !routeAccessControls[method] || routeAccessControls[method](data);
    if (!isAllowed) return cb('Unauthorized');
    return next();
}

module.exports = socketLogger;

const PATHS = require('./paths');
const tokenStorage = require('../token/storage');
const userStorage = require('../user/storage');

const isAuthUser = ({token}) => {
    if (!token) return false;
    const tokenInstance = tokenStorage.get(token);
    if (!tokenInstance) return false;
    const user = userStorage.getById(tokenInstance.userId);
    return !!user
}

module.exports = {
    [PATHS.auth.login]: isAuthUser,
}

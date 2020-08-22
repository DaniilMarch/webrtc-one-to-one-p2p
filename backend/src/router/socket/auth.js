const {auth} = require('../../internal/socketRoutes/paths');
const userStorage = require('../../internal/user/storage');
const tokenStorage = require('../../internal/token/storage');

module.exports = socket => {
    socket.on(auth.register, (data, cb) => {
        try {
            const {name} = data;
            const user = userStorage.create({name});
            const tokenInstance = tokenStorage.create(user.id);
            if (cb) cb(null, {user: user.toState(), token: tokenInstance.token});
        } catch (e) {
            if (cb) cb(e);
        }
    });

    socket.on(auth.login, (data, cb) => {
        try {
            const {token} = data;
            const tokenInstance = tokenStorage.get(token);
            const user = userStorage.getById(tokenInstance.userId);
            user.socket = socket;
            socket.userId = user.id;
            if (cb) cb(null, {user: user.toState()});
        } catch (e) {
            if (cb) cb(e);
        }
    });

    socket.on(auth.logout, (data, cb) => {
        try {
            const {userId} = socket;
            userStorage.remove(userId);
            delete socket.userId;
            if (cb) cb(null, {success: true})
        } catch (e) {
            if (cb) cb(e);
        }
    })
}

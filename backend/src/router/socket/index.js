const loggerMiddleware = require('../../internal/socketMiddleware/socketLogger')
const authMiddleware = require('../../internal/socketMiddleware/socketAuth');
const applyAuthRoutes = require('./auth');

class SocketRouter {
    constructor(io) {
        this.io = io;
        this.io.on('connection', this.handleConnection.bind(this));
    }

    handleConnection(socket) {
        socket.use(loggerMiddleware);
        socket.use(authMiddleware);
        applyAuthRoutes(socket);
    }
}

module.exports = SocketRouter;

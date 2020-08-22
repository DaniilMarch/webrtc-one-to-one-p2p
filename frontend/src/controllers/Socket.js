import io from 'socket.io-client';

import STORAGE_KEYS from 'constants/storageKeys';

export default class SocketController {
    constructor(name) {
        this.socket = null;
        if (name) window[name] = this;
    }

    connect(url, query, path = '/socket.io') {
        this.socket = io(url, {
            transports: ['websocket'],
            query,
            forceNew: true,
            path,
        });
    }

    async broadcast(method, data) {
        return new Promise(resolve => {
            this.socket.broadcast.emit(method, data, (error, response) => resolve({error, response}));
        });
    }

    async emit(method, data) {
        return new Promise(resolve => {
            this.socket.emit(method, data, (error, response) => resolve({error, response}));
        });
    }

    async emitAuth(method, data) {
        data.token = localStorage.getItem(STORAGE_KEYS.token);
        return new Promise(resolve => {
            this.socket.emit(method, data, (error, response) => resolve({error, response}));
        });
    }

    on(method, listener) {
        this.socket.on(method, listener);
    }

    once(method, listener) {
        this.socket.on(method, (...args) => {
            listener(...args);
            this.socket.off(method);
        });
    }

    off(method) {
        this.socket.off(method);
    }

    removeAllListeners(method) {
        this.socket.removeAllListeners(method);
    }

    disconnect() {
        if (!this.socket) return;
        this.socket.disconnect();
        this.socket.removeAllListeners();
    }
}

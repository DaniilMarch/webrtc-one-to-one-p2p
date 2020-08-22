const express = require('express');
const pem = require('pem');
const http = require('http');
const https = require('https');
const Io = require('socket.io');

const SocketRouter = require('../router/socket');

class Engine {
    constructor() {
        this.server = null;
        this.io = null;
        this.app = null;
    }

    async start() {
        this.app = express();
        this.server = await this.createServer();
        this.io = new Io(this.server, {transports: ['websocket']});

        this.createRouter();
        this.createSocketRouter();

        this.server.listen(config.port, () => {
            console.log(`Server listening on port ${config.port}`)
        });
    }

    createServer() {
        return new Promise((res, rej) => {
            if (config.withHttps) {
                pem.createCertificate({days: 1, selfSigned: true}, (err, keys) => {
                    if (err) return rej(err);
                    res(https.createServer({key: keys.serviceKey, cert: keys.certificate}, this.app));
                });
            } else {
                res(http.Server(this.app));
            }
        });
    }

    createRouter(){}

    createSocketRouter() {
        new SocketRouter(this.io);
    }
}

module.exports = Engine;

const uuid = require('uuid');

class Index {
    constructor(userId) {
        this.userId = userId;
        this.token = uuid.v4();
    }
}

module.exports = Index;

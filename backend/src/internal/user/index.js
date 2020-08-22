const uuid = require('uuid');

class User {
    constructor({name}) {
        this.name = name;
        this.id = uuid.v4();
        this.socket = null;
    }

    toState() {
        return {
            id: this.id,
            name: this.name,
        }
    }
}

module.exports = User;

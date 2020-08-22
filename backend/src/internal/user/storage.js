const User = require('./index');

const users = {}

const create = data => {
    const user = new User(data);
    users[user.id] = user;
    return user;
}
const getById = id => users[id];
const remove = id => delete users[id];

module.exports = {
    create,
    getById,
    remove,
}

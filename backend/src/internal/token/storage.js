const Token = require('./index');

const tokens = {};

const create = userId => {
    const tokenInstance = new Token(userId);
    tokens[tokenInstance.token] = tokenInstance;
    return tokenInstance;
}
const get = token => tokens[token];
const remove = token => delete tokens[token];

module.exports = {
    create,
    get,
    remove,
}

const base = require("./config/base");
const node_env = base.NODE_ENV;

module.exports = Object.assign({}, base, require(`./config/${node_env}`));
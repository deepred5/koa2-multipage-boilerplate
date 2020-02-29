const path = require('path');
const env = process.env;

module.exports = {
  PORT: env.PORT || "8012",
  HOST_ADDRESS: env.HOST_ADDRESS || "0.0.0.0",
  NODE_ENV: env.NODE_ENV || 'prod',
  staticResourceMappingPath: path.resolve(__dirname, "../manifest.json"),
}
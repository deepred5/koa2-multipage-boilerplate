const path = require('path');

module.exports = {
  staticServer: "//0.0.0.0:9001",
  staticResourceMappingPath: path.resolve(__dirname, "../manifest-dev.json"),
}
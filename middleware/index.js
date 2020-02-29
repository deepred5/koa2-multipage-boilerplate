const chunkmap = require('./chunkmap');
const config = require('../config');

module.exports = (app) => {
  app.use(chunkmap({
    staticServer: config.staticServer,
    staticResourceMappingPath: config.staticResourceMappingPath
  }));
};
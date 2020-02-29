const path = require('path');
const views = require('koa-views');
const chunkmap = require('./chunkmap');
const config = require('../config');
const router = require('../router');

module.exports = (app) => {
  app.use(chunkmap({
    staticServer: config.staticServer,
    staticResourceMappingPath: config.staticResourceMappingPath
  }));

  app.use(views(path.resolve(__dirname, "../views"), { map: { html: 'ejs' } }));

  app
  .use(router.routes())
  .use(router.allowedMethods());
};
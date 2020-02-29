const homeService = require('../services/home');

const home = {
  async index(ctx, next) {
    const list = await homeService.getList();
    ctx.body = list;
  }
}

module.exports = home;
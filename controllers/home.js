const homeService = require('../services/home');

const home = {
  async index(ctx, next) {
    const list = await homeService.getList();
    await ctx.render('index', {
      list,
      title: '首页'
    });
  }
}

module.exports = home;
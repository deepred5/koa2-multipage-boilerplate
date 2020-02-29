const tradeService = require('../services/trade');

const trade = {
  async index(ctx, next) {
    await ctx.render('trade-index', {
      title: 'trade'
    });
  },
  async fail(ctx, next) {
    await ctx.render('trade-fail', {
      title: 'trade-fail'
    });
  },
  async success(ctx, next) {
    await ctx.render('trade-success', {
      title: 'trade-success'
    });
  },
  async getData(ctx, next) {
    const res = await tradeService.getData(ctx);
    ctx.body = res.data;
  }
}

module.exports = trade;
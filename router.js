const Router = require('koa-router');
const router = new Router();

const home = require('./controllers/home');
const trade = require('./controllers/trade');

router.get('/', home.index);
router.get('/trade', trade.index);
router.get('/trade-success', trade.success);
router.get('/trade-fail', trade.fail);
router.get('/api/girls', trade.getData);

module.exports = router;
const Koa = require('koa');
const config = require("./config");
const milldeware = require('./middleware');

const { PORT, HOST_ADDRESS } = config;

const app = new Koa();
milldeware(app);

app.listen(PORT, HOST_ADDRESS, () => {
  console.log(`app start at: http://${HOST_ADDRESS}:${PORT}`);
})
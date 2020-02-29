const axios = require('axios');

const home = {
  async getData(ctx) {
    // 转发接口
    const res = await axios.get('http://deepred5.com/cors.php', {
      headers: {
        'Cookie': ctx.header.cookie, // 转发带上cookie
      }
    });

    return res;
  }
}

module.exports = home;
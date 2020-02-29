const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const home = {
  async getList() {
    const list = [{ name: 'cody' }, { name: 'deepred' }];
    await sleep(500);
    return list;
  }
}

module.exports = home;
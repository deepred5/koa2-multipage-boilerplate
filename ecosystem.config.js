const { name } = require("./package.json");
const { NODE_ENV } = process.env;
module.exports = {
  apps: [
    {
      name,
      script: "./app.js",
      env: {
        NODE_ENV: NODE_ENV
      },
      watch: true,
      ...(/^qa\d?$/i.test(NODE_ENV)
        ? // Expose debug port if the container is run in a test environment
        { node_args: ["--inspect=0.0.0.0:9229"] }
        : null)
    }
  ]
};
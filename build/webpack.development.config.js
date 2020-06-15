const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
console.log(baseConfig);
module.exports = merge(baseConfig, {
  output: {
    filename: "main.js"
  }
})


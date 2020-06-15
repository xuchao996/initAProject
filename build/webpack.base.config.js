
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const resolve = path.resolve;

console.log("__dirname", process.env.NODE_ENV);
module.exports = {
  // context: resolve(__dirname, '../'),
  entry:  "./src/main.js",
  resolve: {
    alias: {
	"@": resolve(__dirname, '../src'),
	Page: resolve(__dirname, '../src/page')
    }
  },
  module: {
    rules: [
	{
	  test: /.vue$/,
	  loader: "vue-loader"
	},
 	{
	  test: /.js$/,
	  loader: "babel-loader"
	},
	{
	  test: /.css$/,
	  loader: ["style-loader", "css-loader"]
	}
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
 	template: resolve(__dirname, "../template/index.html")
    })
  ],
  mode: process.env.NODE_ENV || "none"
}

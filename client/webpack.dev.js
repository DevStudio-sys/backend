const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    compress: true,
    port: 3001
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        API_URI: JSON.stringify("http://localhost:8000"),
        APP_URI: JSON.stringify("http://localhost:3001")
      }
    })
  ]
});

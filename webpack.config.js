var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "js/"),
    filename: "bundle.js",
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

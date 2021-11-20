const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    host: "localhost",
    port: 5050,
    historyApiFallback: true,
    open: true,
  },
};

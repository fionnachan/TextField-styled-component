const path = require('path');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 3000
  },
  entry: {
    jsx: "./app.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: ["babel-loader","eslint-loader"]
      },
      {
        test: /\.html$/,
        loader: ["html-loader"]
      },
      {
        test: /\.css$/,
        loader: ["css-loader"]
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "node_modules")
    ],
    extensions: ['.js', '.jsx']
  }
};

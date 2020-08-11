const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './src/script/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.s?css/,
        use: [
          // sass-loader - Loads a Sass/SCSS file and compiles it to CSS.
          // css-loader - Interprets @import and url() like import/require() and will resolve them.
          // style-loader - Inject CSS into the DOM.
          'style-loader', 'css-loader', 'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/build',
  },
};

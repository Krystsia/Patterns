const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dirApp = path.join(__dirname, 'src');
const dirDist = path.join(__dirname, 'dist');
module.exports = {
  entry: path.join(dirApp, 'index.ts'),
  output: {
    path: dirDist,
    filename: 'pattern.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        loader: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(dirApp, 'index.html')
  })],
  devServer: {
    port: 2000,
    contentBase: dirApp,
    hot: true,
  }
}

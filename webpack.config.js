const path = require('path')
const webpack = require('webpack')


module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    // Load `moment/Locale/ja.js` and `moment/Locale/it.js`
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja|it/),

    // Load `moment/Locale/ja.js`
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja/),

    // after webpack2〜 warnings default false.
    new webpack.optimize.UglifyJsPlugin({}),



  ],
}
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const hash = (new Date()).getTime()


module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    pc: [
    './components/pc.jsx',
    // './pc.js',
    ],
    sp: [
    './sp.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {

    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            // babel-preset-es2015
            'es2015',
            // babel-preset-react
            'react',
          ]
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: [
      //       'es2015',
      //       'react',
      //     ],
      //   }
      // }

    ]
  },
  plugins: [
    // Load `moment/Locale/ja.js` and `moment/Locale/it.js`
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja|it/),

    // Load `moment/Locale/ja.js`
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja/),

    // moment.jsから全ての言語を除外
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),


    // after webpack2〜 warnings default false.
    new webpack.optimize.UglifyJsPlugin({}),



    new HtmlWebpackPlugin({
      filename: '../dist/pc.html',
      template: 'pc.html',
      inject: false,
      hash: hash,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    new HtmlWebpackPlugin({
      filename: '../dist/sp.html',
      template: 'sp.html',
      inject: false,
      hash: hash,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
  ],
}
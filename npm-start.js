const config = require('./webpack.config.js')
const opn = require('opn')



var uri = `http://localhost:${config.devServer.port}`
opn(uri)

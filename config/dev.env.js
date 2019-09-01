'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV       : '"development"',
  BUTTER_API_KEY : '18c4bff3db8974602b7c13d114db1f40ccf76feb',
})

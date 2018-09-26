'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV       : '"development"',
  BUTTER_API_KEY : '"your ButterCMS API KEY"',
})

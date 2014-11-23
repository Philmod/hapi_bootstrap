/**
* Dependencies.
*/
var path = require('path');

/**
 * MongoDB.
 */
var mongodb = {
  development: {
      host: 'localhost'
    , database: 'hapi_bootstrap_localhost'
  },
  test: {
      host: 'localhost'
    , database: 'hapi_bootstrap_test'
  }
}

/**
 * Config.
 */
var env = (process.env.NODE_ENV) ? process.env.NODE_ENV.toLowerCase() : 'development';
module.exports = {
  rootPath: path.normalize(__dirname + '/..'),
  port: parseInt(process.env.PORT, 10) || 3000,
  hapi: {
    options: { }
  },
  mongodb: mongodb[env]
}

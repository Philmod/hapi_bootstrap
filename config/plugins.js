/**
 * Dependencies.
 */
var config = require('./index')
  , server = require(config.rootPath + '/index.js')
  ;

/**
 * Good options.
 */
var goodOptions = {
  subscribers: {
    console: ['ops', 'request', 'log', 'error']
  }
};

/**
 * Register.
 */
server.pack.register([
  {
    plugin: require("good"), // Logging
    options: goodOptions
  }
], function(err) {
  if (err) throw err;
});

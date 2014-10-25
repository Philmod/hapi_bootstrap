/**
* Dependencies.
*/
var Hapi = require('hapi')
  , config = require('./config/index.js')
  ;

// Create a server with a host, port, and options
var server = Hapi.createServer('0.0.0.0', config.port, config.hapi.options);

// Export the server.
module.exports = server;

// Bootstrap Hapi Server Plugins
require('./config/plugins');

// Add the server routes
server.route(require('./config/routes'));

// Start the server
if (!module.parent) {
  server.start(function() {
    console.log('Server started at: ' + server.info.uri);
  });
}

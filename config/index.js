/**
* Dependencies.
*/
var path = require('path');

/**
 * Config.
 */
module.exports = {
  rootPath: path.normalize(__dirname + '/../..'),
  port: parseInt(process.env.PORT, 10) || 3000,
  hapi: {
    options: { }
  }
}

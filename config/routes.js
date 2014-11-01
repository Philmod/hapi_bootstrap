/**
* Dependencies.
*/
var requireDirectory = require('require-directory');

/**
 * Controllers.
 *
 *  Bootstrap your controllers so you dont have to load them individually. 
 *  This loads them all into the controller name space. https://github.com/troygoode/node-require-directory
 */
var controller = requireDirectory(module, '../controllers');

/**
 * Routes.
 */
module.exports = [
  {
    method: 'GET',
    path: '/',
    config: controller.base.index
  },
  {
    method: 'GET',
    path: '/users/{userid}',
    config: controller.users.get
  },
];

/**
 * Dependencies.
 */
var Joi = require("joi")
  , requireDirectory = require('require-directory')
  ;

/**
 * Models.
 */
var models = requireDirectory(module, '../models');

/**
 * Module.
 */
module.exports = {
  get: {
    handler: function(request, reply){
      reply({
        id: request.params.userid
      });
    },
    validate: {
      params: {
        userid: Joi.string().min(8).max(100)
      },
      query: {}
    }
  },
}

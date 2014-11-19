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
    handler: function(request, reply) {
      models.user.findOne({_id: request.params.userid}, function(e, user) {
        reply(user);
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

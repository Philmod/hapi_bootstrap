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
  create: {
    handler: function(request, reply) {
      var user = new models.user(request.payload);
      user.save(function(e, user) {
        if (e) return reply(e);
        reply(user);
      });
    },
    validate: {
      payload: {
        username: Joi.string()
      }
    }
  },
}

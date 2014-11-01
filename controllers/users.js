/**
 * Dependencies.
 */
var Joi = require("joi");

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

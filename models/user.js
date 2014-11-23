/**
 * Dependencies.
 */
var Joi = require('joi')
  , Mongoose = require('../config/mongodb').Mongoose
  , Schema = Mongoose.Schema
  ;

/**
 * Schema.
 */
var userSchema = new Schema({
  username: { type: String }
})

/** 
 * Methods.
 */
userSchema.method({

});

/**
 * Statics.
 */
userSchema.static({

});

/**
 * Create mongoose model.
 */
var User = Mongoose.model('User', userSchema, 'users');
module.exports = User;  

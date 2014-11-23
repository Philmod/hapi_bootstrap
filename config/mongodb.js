/**
 * Dependencies.
 */
var Mongoose = require('mongoose');  
var config = require('./index.js');

/**
 * Set up mongodb.
 */
var mongodb = config.mongodb;
var auth = (mongodb.user) ? (mongodb.user+":"+mongodb.pass+"@") : '';
var mongourl = 'mongodb://' + auth + mongodb.host + ':' + (mongodb.port || 27017) + '/' + mongodb.database;

/**
 * Connect.
 */
Mongoose.connect(mongourl);  
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));  
db.once('open', function callback() {  
  console.log("Connection with database succeeded : ", mongourl);
});

exports.Mongoose = Mongoose;  
exports.db = db;  

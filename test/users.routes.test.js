var Lab = require("lab")
  , expect = require('chai').expect
  , server = require("../")
  , lab = exports.lab = Lab.script()
  , describe = lab.describe
  , it = lab.it
  , before = lab.before
  , after = lab.after
  , mongo = require('../config/mongodb')
  ;

describe("/users", function() {

  // Variables.
  var user;

  // Clean DB.
  before(function(done) {
    mongo.db.base.models.User.find().remove(done);
  });

  // Create a user.
  before(function(done) {
    mongo.db.base.models.User.create({
      username: 'philmod'
    }, function(e, u) {
      expect(e).to.not.exist;
      user = u;
      done();
    });
  });

  describe('GET /users/{userid}', function() {

    it("fails if the id is too short", function(done) {
      var options = {
        method: "GET",
        url: "/users/abc"
      };
   
      server.inject(options, function(response) {
        var result = response.result;
        expect(response.statusCode).to.equal(400);
        expect(result).to.have.property('error');
        expect(result).to.have.property('message', 'userid length must be at least 8 characters long');
        done();
      });
    });

    it("fails if the id is too long", function(done) {
      var options = {
        method: "GET",
        url: "/users/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      };
   
      server.inject(options, function(response) {
        var result = response.result;
        expect(response.statusCode).to.equal(400);
        expect(result).to.have.property('error');
        expect(result).to.have.property('message');
        done();
      });
    });
  
    it("successfully returns a user", function(done) {
      var options = {
        method: "GET",
        url: "/users/" + user._id
      };
   
      server.inject(options, function(response) {
        var result = response.result;
        expect(response.statusCode).to.equal(200);
        expect(result).to.have.property('username', 'philmod');
        done();
      });
    });

  });

  describe('POST /users', function() {

    it("successfully creates a new user", function(done) {
      var options = {
        method: "POST",
        url: "/users",
        payload: {
          username: 'username'
        }
      };
   
      server.inject(options, function(response) {
        var result = response.result;
        expect(response.statusCode).to.equal(200);
        expect(result).to.have.property('username', 'username');
        done();
      });
    });

  });

});


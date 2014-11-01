var Lab = require("lab")
  , expect = require('chai').expect
  , server = require("../")
  , lab = exports.lab = Lab.script()
  , describe = lab.describe
  , it = lab.it
  , before = lab.before
  , after = lab.after
  ;

describe("/users", function() {

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
        url: "/users/superlongid"
      };
   
      server.inject(options, function(response) {
        var result = response.result;
        expect(response.statusCode).to.equal(200);
        expect(result).to.have.property('id', 'superlongid');
        done();
      });
    });

  });

});


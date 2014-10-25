var Lab = require("lab")
  , expect = require('chai').expect
  , server = require("../")
  , lab = exports.lab = Lab.script()
  , describe = lab.describe
  , it = lab.it
  , before = lab.before
  , after = lab.after
  ;

describe("/", function() {
  
  it("successfully returns 'Hello World'", function(done) {
    var options = {
      method: "GET",
      url: "/"
    };
 
    server.inject(options, function(response) {
      var result = response.result;
      expect(response.statusCode).to.equal(200);
      expect(result).to.equal('Hello, world!');
      done();
    });
  });

});


describe("Status", function() {
  
  it("successfully responds with status information", function(done) {
    var options = {
      method: "GET",
      url: "/status"
    };
 
    server.inject(options, function(response) {
      var result = response.result;

      expect(response.statusCode).to.equal(200);
      expect(result).to.be.instanceof(Object);
      expect(result).to.have.property('running');
      expect(result).to.have.property('memoryUsage');

      done();
    });
  });

});


var test   = require('tape');
// we display the file (name) in each test name
var dir   = __dirname.split('/')[__dirname.split('/').length-1];
var file  = dir + __filename.replace(__dirname, '') + ' -> ';

/************************ LOAD HAPI SERVER ***************************/
var server = require("../example/server.js");

/************************* TESTS ***************************/
test(file + "GET / Warm Up the Engine", function(t) {
  var options = {
    method: "GET",
    url: "/"
  };
  server.inject(options, function(response) {
    t.equal(response.statusCode, 200, "Welcome to Timer Land Anonymous person!");
    t.end();
  });
});

var person = {
  "email" : 'dwyl.test+register@gmail.com'
}

test(file+"register with email", function(t) {
  var options = {
    method: "POST",
    url: "/register",
    payload : person
  };

  server.inject(options, function(response) {
    // console.log(response)
    t.equal(response.statusCode, 200, "Register worked with email ONLY");
    server.stop(function(){ t.end() });
  });
});

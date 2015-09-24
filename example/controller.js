var Boom        = require('boom');
var bcrypt      = require('bcrypt'); // see: https://github.com/nelsonic/bcrypt
var redisClient = require('redis-connection')();
function register_handler(request, reply){
  redisClient.get(request.payload.email, function (err, reply) {
    if(err) { // error when if not already registered, register the person:
      bcrypt.genSalt(12, function(err, salt) {
        bcrypt.hash(req.payload.password, salt, function(err, hash) {
          request.payload.password = hash; // save the password's hash
          redisClient.set(request.payload.email, JSON.stringify(request.payload));
          return reply('Success')
        }); // end bcrypt.hash
      }); // end bcrypt.genSalt
    }
    else {
      return reply(Boom.badRequest('Already Registered'));
    }
  });
}

module.exports = register_handler;


var Joi = require('joi');
var custom_fields = {
  email : Joi.string().email().required(),
  name  : Joi.string().alphanum().min(1).required()
}
var opts = { fields: custom_fields };       // pass the options when registering the plugin

var Boom        = require('boom');
var bcrypt      = require('bcrypt'); // see: https://github.com/nelsonic/bcrypt
var redisClient = require('redis-connection')();
function custom_handler(request, reply){
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
// include the custom_handler in your otps object:
opts.handler = custom_handler;

var Hapi   = require('hapi'); https://github.com/nelsonic/learn-hapi
var server = new Hapi.Server({ debug: false })
server.connection({ port: process.env.PORT });
server.register([{ register: require('hapi-register'), options:opts }], function (err) {
  if (err) { console.error('Failed to load plugin:', err); }
});

server.start(function() {
  console.log('Now Visit: http://127.0.0.1:'+server.info.port);
});

var Hapi   = require('hapi'); https://github.com/nelsonic/learn-hapi
var Inert  = require('inert');
var server = new Hapi.Server({ debug: false })

var custom_fields  = require('./model');      // fields required to register
var custom_handler = require('./controller'); // handler for registration
var opts = {
  fields: custom_fields,
  handler: custom_handler
};

server.connection({ port: process.env.PORT });
server.register([Inert, { register: require('hapi-register'), options:opts }], function (err) {
  if (err) { console.error('Failed to load plugin: ', err); }
  // console.log(__dirname + '/index.html');
  server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: __dirname + '/index.html'
    }
  });
});

server.start(function() {
  console.log('Visit: http://127.0.0.1:'+server.info.port);
});

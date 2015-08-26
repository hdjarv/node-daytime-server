#!/usr/bin/env node

'use strict';

var net = require('net');
var moment = require('moment');

var port = process.env.PORT || 13;

var server = net.createServer(function (socket) {
  socket.end(moment().format(process.env.FORMAT || 'YYYY-MM-DD HH:mm:ss Z') + '\n');
});

server.on('error', function (error) {
  console.error("Error starting server: '%s'", error);
});

server.on('close', function () {
  console.log('Daytime server stopped');
  process.exit(0);
});

server.listen(port, function () {
  console.log('Daytime server started on port %d', port);
});

var shutdown = function () {
  console.log('Daytime server stopping');
  if (server) {
    server.close();
  }
  setTimeout(function () {
    console.log('Daytime server not responding, forcing shutdown');
    process.exit(0);
  }, 5000);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

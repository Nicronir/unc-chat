'use strict';

var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('user connected');

socket.on('disconnect', function () {

  console.log('user disconnected');
});

socket.on('add-message', (message) => {
  io.emit('message', {type: 'new-message', text: message});
});
});

http.listen(8080, () => {
    console.log('started on port 8080');
});

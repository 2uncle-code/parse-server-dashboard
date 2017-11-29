var express = require('express');
var routes = require('./Routes/');
var path = require('path');

var app = express();
app.use('/', routes);
app.set('views', path.join(__dirname,  'Views'));
app.set('view engine', 'pug');
var httpServer = require('http').createServer(app);
httpServer.listen($config.appPort,function(){
    console.log('app client  running on port 8080.');
});
var express = require('express');
$config=require('./config');
var ParseServer =require('./server/Parse_Server');
var ParseDashboard = require('./server/Parse_Dashboard');

var app = express();
// 把 Parse Server 挂载在 /parse
app.use('/parse', ParseServer);

// 把 Parse Dashboard 挂载在 /dashboard
app.use('/dashboard', ParseDashboard);
var httpServer = require('http').createServer(app);
httpServer.listen($config.serverPort,function(){
console.log('parse-server parse-dashboard are running on port 4040.');
});
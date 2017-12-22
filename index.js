/**
 * This file is your app entry.
 */



var express = require('express');
<<<<<<< HEAD

//Load the app configs
$config=require('./config');

//load the app Helper
$helper=require('./app/Helpers');

//var path = require('path');
=======
var ParseServer =require('./server/Parse_Server');
var ParseDashboard = require('./server/Parse_Dashboard');
>>>>>>> parent of c26fd8a... fulfill config/index.js with global settings


var app = express();
<<<<<<< HEAD

//Load the routes
require('./app/Routes')(app);


 //Initialise the web server
var ParseHttpServer = require('http').createServer(app);
ParseHttpServer.listen($config.env.appPort,function(){
    console.log('parse-server parse-dashboard are  running on port %s.',$config.env.appPort);
=======
// 把 Parse Server 挂载在 /parse
app.use('/parse', ParseServer);

// 把 Parse Dashboard 挂载在 /dashboard
app.use('/dashboard', ParseDashboard);
 
var httpServer = require('http').createServer(app);
httpServer.listen(4040,function(){
    console.log('parse-server-dashboard running on port 4040.');
>>>>>>> parent of c26fd8a... fulfill config/index.js with global settings
});





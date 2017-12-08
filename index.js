/**
 * This file is your app entry.
 */



var express = require('express');

//Load the app configs
$config=require('./config');

//load the app Helper
$helper=require('./app/Helpers');

//var path = require('path');


var app = express();

//Load the routes
require('./app/Routes')(app);


 //Initialise the web server
var ParseHttpServer = require('http').createServer(app);
ParseHttpServer.listen($config.env.appPort,function(){
    console.log('parse-server parse-dashboard are  running on port %s.',$config.env.appPort);
});





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

// //Setting the view engine and template folder
// app.set('views', path.join(__dirname,  'app\\Views'));
// app.set('view engine', 'pug');


 


 //Initialise the web server
var ParseHttpServer = require('http').createServer(app);
ParseHttpServer.listen($config.env.appPort,function(){
    console.log('parse-server parse-dashboard are  running on port %s.',$config.env.appPort);
});





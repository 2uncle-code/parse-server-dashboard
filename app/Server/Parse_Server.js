/**
 * This file let you define your parse server.
 * The reason why not put all setting options in .env is 
 * you may have many more options here.
 */

var ParseServer = require('parse-server').ParseServer;


var api = new ParseServer({
    
    "appId": $config.env.appId,
    "masterKey": $config.env.masterKey,
    "appName": $config.env.appName,
    "databaseURI":$config.env.databaseURI,
    "serverURL":$config.serverURL
    });

module.exports=api; 
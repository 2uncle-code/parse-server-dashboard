/**
 * This file let you define your parse dashboard.
 * The reason why not put all setting options in .env is 
 * you may have many more options here.
 */

var ParseDashboard = require('parse-dashboard');
var dashboard = new ParseDashboard({
    "apps": [{
"serverURL":$config.serverURL,
"appId": $config.env.appId,
"masterKey": $config.env.masterKey,
"appName": "Myblog"}]
});

module.exports=dashboard; 

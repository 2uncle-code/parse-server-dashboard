var ParseDashboard = require('parse-dashboard');
var dashboard = new ParseDashboard({
"apps": [{
"serverURL":$config.serverURL,
"appId": "asdhwu648vx",
"masterKey": "lkasni654zdw",
"appName": "Myblog"}]
});

module.exports=dashboard;
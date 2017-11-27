var ParseServer = require('parse-server').ParseServer;


var api = new ParseServer({
    
    "appId": "asdhwu648vx",
    "masterKey": "lkasni654zdw",
    "appName": "blog",
    "databaseURI":$config.databaseURI,
    "serverURL":$config.serverURL
    });

module.exports=api; 
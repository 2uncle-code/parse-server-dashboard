var ParseServer = require('parse-server').ParseServer;

var api = new ParseServer({
    
    "appId": "asdhwu648vx",
    "masterKey": "lkasni654zdw",
    "appName": "blog",
    "databaseURI":"mongodb://localhost/blog",
    "serverURL":'http://localhost:4040/parse'
    });

module.exports=api; 
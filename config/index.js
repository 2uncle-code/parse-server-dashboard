
/**
 * This file let you define your own necessary options for your appliaction.
 */

 // Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

//You may have some more options need to set but can be fill by .env file
//can set here.
config ={
    serverURL:process.env.host+":"+process.env.appPort+process.env.mountPath,
    
};

config.env=process.env;
module.exports=config;


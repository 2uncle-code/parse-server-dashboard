/**
 * This file let you define your own necessary options for your appliaction.
 */

require('dotenv').config();

config ={
    serverURL:process.env.host+":"+process.env.appPort+process.env.mountPath,
};
config.env=process.env;
module.exports=config;
/**
 * This file let you define your routes for your appliaction.
 */

 //Import your main Controller
var mainController = require('../Controllers');

//Import your parse server and parse dashboard
var ParseServer =require('../Server/Parse_Server');
var ParseDashboard = require('../Server/Parse_Dashboard');


//Now define your routes
//Do not use app.get() for your parse server and parse dashboard!!!

module.exports = router=function(app)
{
     app.get('/', mainController.index);
     app.get('/about', mainController.about);
     app.get('/books', mainController.books);
    
     app.use($config.env.mountPath, ParseServer);
     app.use($config.env.dashBoardMountPath, ParseDashboard);
     app.get('/666',function(req,res){
    res.send('66666');
    })
};
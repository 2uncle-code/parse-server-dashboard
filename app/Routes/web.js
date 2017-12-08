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
 
 
 module.exports = router=function(app,easyRouter)
 {
         //Setting the view engine and template folder
     app.set('views', $helper.getTheme);
     app.set('view engine', 'pug');
 
     easyRouter.get('/', mainController.index);
     easyRouter.get('/about', mainController.about);
     easyRouter.get('/books', mainController.books);

        //Setting Up Parse Server and Parse DashBoard
        // app.use($config.env.mountPath, ParseServer);
        // app.use($config.env.dashBoardMountPath, ParseDashboard);
     easyRouter.group($config.env.mountPath, ParseServer);
     easyRouter.group($config.env.dashBoardMountPath, ParseDashboard);
     easyRouter.bind(app);
    
 };
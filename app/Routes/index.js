/**
 * This file let you define your routes for your appliaction.
 */

 //Import your main Controller
var mainController = require('../Controllers');




module.exports = router=function(app)
{
        //Setting the view engine and template folder
    app.set('views', $helper.getTheme);
    app.set('view engine', 'pug');
    
        //The routes should defined by different environments
    require('./web')(app);
    require('./api')(app);
   
};
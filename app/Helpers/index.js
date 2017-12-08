

var path = require('path');


module.exports.getTheme = function() {
    var views=[];
    views.push(path.join(__dirname,'app\\Themes\\',$config.env.theme));
    views.push(path.join(__dirname,'app\\Admin\\','Views'));
    return  views;
}



module.exports.index = function(req, res) {
    res.render('index', { title: '厉害了大兄弟',message:'666' });
};

module.exports.books = function(req, res) {
    res.render('books', { title: 'Books', });
};

module.exports.about = function (req, res) {
    res.render('about', { title: 'About' });
};
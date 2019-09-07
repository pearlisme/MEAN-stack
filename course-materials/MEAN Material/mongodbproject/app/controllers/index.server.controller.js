exports.render = function(req, res) {
    res.render('index', {
    	title: 'MVC with Mongodb by Murthy',
    	user: req.user ? req.user.username : ''
    });
};
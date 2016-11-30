var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
	res.render('index');
});

// Get menu section
router.get('/menu/:section', function(req, res){
	var found = false;

	// look up the menu section from the route.
	for (var i = 0; i < res.locals.menu.sections.length; i++) {
		if (res.locals.menu.sections[i].name === req.params.section) {
			res.locals.section = res.locals.menu.sections[i];
			found = true;
		}
	}

	// if a section has been found then render the section, else redirect to the index.
	if (found){
		res.render('section');
	} else {
		res.render('index');
	}

});

module.exports = router;

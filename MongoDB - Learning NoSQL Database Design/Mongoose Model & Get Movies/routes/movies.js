var express = require('express');
var router = express.Router();

var Movie = require('../models/Movie');

router.get('/', function(req, res, next){
	Movie.getMovies(function(err, movies){
		if(err){
			res.send(err);
		}
		res.json(movies);
	},10);
});

module.exports = router;
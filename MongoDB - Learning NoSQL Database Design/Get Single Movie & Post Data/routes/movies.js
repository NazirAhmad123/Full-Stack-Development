var express = require('express');
var router = express.Router();

var Movie = require('../models/Movie');

// List Movies
router.get('/', function(req, res, next){
	Movie.getMovies(function(err, movies){
		if(err){
			res.send(err);
		}
		res.json(movies);
	},10);
});

// Single Movie
router.get('/:id', function(req, res, next){
	Movie.getMovieById([req.params.id], function(err, movie){
		if(err){
			res.send(err);
		}
		res.json(movie);
	});
});

// Add Movie
router.post('/', function(req, res, next){
	var movie = req.body;
	var newMovie = new Movie(movie);

	newMovie.save(function(err, movie){
		if(err){
			res.send(err);
		}
		res.json(movie);
	});
});

module.exports = router;
var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var tweets = tweetBank.list();
router.get('/', function (req, res) {
  //var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js rocks', tweets: tweets } );
});

router.use(express.static('public'));

router.get( '/users/:name', function (req, res) {
  var result = req.params.name;
  var userTweets = tweetBank.find({name: result});
  res.render( 'index', {tweets: userTweets}); 
});


//Challenge code
router.get( '/tweets/:id', function (req, res) {
  var result = +req.params.id; //+ sign converts to number
  var filteredById = tweetBank.find({id: result});
  res.render( 'index', {tweets: filteredById}); 
});
//






module.exports = router;
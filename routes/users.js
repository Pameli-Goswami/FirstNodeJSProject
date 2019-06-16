var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/home', function(req, res, next) {
  res.send('home');
});

router.get('/about', function(req, res, next) {
  res.send('about');
});

router.get('/contact', function(req, res, next) {
  res.send('contact');
});

module.exports = router;

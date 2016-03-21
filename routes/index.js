var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Chase page. */
router.get('/chase', function(req, res) {
    res.render('chase', { title: 'The Chase' });
});

/* GET Hunt page. */
router.get('/hunt', function(req, res) {
    res.render('hunt', { title: 'The Hunt!' });
});

module.exports = router;

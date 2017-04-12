var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Bring Ideas' });
});

/* GET default route */
router.get('*', function(req, res) {
    res.redirect('/');
});

module.exports = router;

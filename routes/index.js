var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('localhost/flights')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flights' });
});

module.exports = router;

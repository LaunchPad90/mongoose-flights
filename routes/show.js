var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('/:id', { title: 'Edit Flight' });
  });

module.exports = router;
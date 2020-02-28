let express = require('express');
let router = express.Router();
let ticketCrtl = require('../controllers/tickets')

router.get('/flights/:id/tickets/new', ticketCrtl.new);

module.exports = router;
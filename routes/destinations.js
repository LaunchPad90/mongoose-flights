let express = require('express');
let router = express.Router();
const destinationCtrl = require('../controllers/destinations');

router.post('/:flightId', destinationCtrl.create);
module.exports = router;
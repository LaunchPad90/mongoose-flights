let express = require('express');
let router = express.Router();
const destinationCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationCtrl.create);
module.exports = router;
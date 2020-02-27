const Destination = require('../models/flight');

module.exports = {
    create
}

function create(req, res) {
Destination.find({}, function(err, destination) {
    console.log(req.body)
    res.redirect('flights/:id', {
    destination
    });
});
}


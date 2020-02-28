const Flight = require('../models/flight');
const Destination = require('../routes/destinations')
module.exports = {
    create,
}

function create(req, res) {
    Flight.findById(req.params.flightId, function(err, flight) {
        console.log('create', flight)
        console.log(req.body)
        flight.destination.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

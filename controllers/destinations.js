const Flight = require('../models/flight');

module.exports = {
    create,
    show
}

function create(req, res) {
    Flight.findById(req.params.flightId, function(err, flight) {
        console.log('create', req.body)
        flight.destination.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}
function show(req, res) {
  console.log(req.body)
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Edit Flight', flight });
    console.log('destRT', flight)
  });
}


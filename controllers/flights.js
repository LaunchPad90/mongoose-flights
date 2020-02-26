const Flight = require('../models/flight');
const flightsCtrl = require('../routes/flights')

module.exports = {
    index,
    new: newFlight,
    create,
    show
};
  
function index(req, res, next) {
  Flight.find({}, function(err, flights) {
    if (err) return next(err);
    res.render('flights', { title: 'All Flights', flights });
  });
}

function newFlight(req, res) {
  var newFlight = new Flight();
  var dt = newFlight.departure;
  var destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
  res.render('flights/new', {title: 'New Flight', destDate});
  // res.render('flights/new', { title: 'New Flight' });
}
function create(req, res) {
  console.log(req.body)
  if (req.body.departure === '') delete req.body.departure;
  console.log(req.body);
  const flight = new Flight(req.body);
  flight.save(function(err) {
  res.redirect('/flights');
  }); 
}
function show(req, res) {
  console.log(req.body)
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', { title: 'Edit Flight', flight });
    console.log('poop', flight)
  });
}
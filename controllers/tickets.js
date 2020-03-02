const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    console.log('hello')
    Flight.findById(req.params.id, function(err, flight) {
      if (err) return next(err);
      res.render('tickets/new', { title: 'Tickets', flight });
    });
  }

function create(req, res) {
  console.log('whats up', req.body)
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.create(req.body, function(err, newTicket) {

      console.log('flight before:', flight)
      flight.tickets.push(newTicket._id);
      console.log('flight after:', flight)
      flight.save(err => {
        res.redirect(`/flights/${flight._id}`)
      }) 
    })
  })
}
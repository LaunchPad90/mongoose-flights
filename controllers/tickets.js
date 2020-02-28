const Ticket = require('../models/ticket');
const Flight = require('../models/flight')

module.exports = {
    new: newTicket
}

function newTicket(req, res) {
    console.log('hello')
    Flight.findById(req.params.id, function(err, flight) {
      if (err) return next(err);
      res.render('tickets/new', { title: 'Tickets', flight });
    });
  }

// function create(req, res) {
//     const ticket = new Ticket(req.body);
//     ticket.save(function(err) {
//     res.render('/flights');
//   }); 
//     console.log('ticket', req.body)
// }
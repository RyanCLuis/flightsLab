const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    // create,
    new: newTicket
}

async function newTicket(req, res) {
    await Ticket.find({})
    res.render('tickets/new')
}

// async function create(req, res) {
//     const flight = await Flight.findById(req.params.id)
//     flight.seat.push(req.body)
//     await flight.save()
//     res.redirect(`flights/${flight._id}/tickets/new`)
// }
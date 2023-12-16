const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('tickets/new', { flight })
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id)
    const { seat, price } = req.body
    const ticket = new Ticket({ seat, price, flight: flight._id })
    await ticket.save()
    flight.tickets.push(ticket._id)
    await flight.save()
    res.redirect(`/flights/${flight._id}`)
}
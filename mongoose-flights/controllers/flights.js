const Flight = require('../models/flight')

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''})
}

async function create(req, res) {
    await Flight.create(req.body)
    res.redirect('/flights/new')
}

module.exports = {
    new: newFlight,
    create,
}
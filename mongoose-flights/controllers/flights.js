const Flight = require('../models/flight')

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''})
}

module.exports = {
    new: newFlight
}
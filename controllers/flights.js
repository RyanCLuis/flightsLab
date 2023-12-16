const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''})
}

async function create(req, res) {
    try {
        await Flight.create(req.body)
        res.redirect('/flights/new')
    } catch (err) {
        console.log('an error occured: \n', err)
        res.render('error', { error: err })
    }
}

async function index(req, res) {
    try {
        const allFlights = await Flight.find({})
        res.render('flights/index', {flights: allFlights})
    } catch (err) {
        console.log('an error occured: \n', err)
        res.render('error', { error: err })
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id).populate('tickets')
    res.render('flights/show', { title: 'Flight Details', flight })
}

module.exports = {
    new: newFlight,
    create,
    index,
    show
}
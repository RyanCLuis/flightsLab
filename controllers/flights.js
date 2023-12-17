const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add a Flight'})
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

async function create(req, res) {
    try {
        await Flight.create(req.body)
        res.redirect('/flights')
    } catch (err) {
        console.log('an error occured: \n', err)
        res.render('error', { error: err })
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id)
    const tickets = await Ticket.find({flight: flight._id}) 
    res.render('flights/show', { title: 'Flight Details', flight, tickets })
    }

function deleteFlight(req, res){
    Flight.deleteOne(req.params.id)
    res.redirect('/flights');
}


module.exports = {
    new: newFlight,
    index,
    create,
    show,
    delete: deleteFlight
}
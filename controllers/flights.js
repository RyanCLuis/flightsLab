const Flight = require('../models/flight')

function newFlight(req, res) {
    // let aYearFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    // aYearFromNow = aYearFromNow.toISOString()
    // console.log("this is the date after a full year \n", aYearFromNow)
    res.render('flights/new', { errorMsg: '', })//aYearFromNow: aYearFromNow})
}

// const dt = newFlight.departs;
// let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
// departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`
// value=<% new Date(new Date().setFullYear(new Date().getFullYear() + 1)) %>

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
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', { title: 'Flight Details', flight })
}

module.exports = {
    new: newFlight,
    create,
    index,
    show
}
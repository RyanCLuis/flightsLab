const Flight = require('../models/flight')

module.exports = {
    create
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id)
    console.log('Before pushing:', flight.destinations);
    flight.destinations.push(req.body)
    console.log('After pushing:', flight.destinations);
    try {
        await flight.save()
        console.log('After saving:', flight.destinations);
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
}
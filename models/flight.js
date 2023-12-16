const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: String,
    arrival: Date,
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema],
    tickets: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
    },
    ],
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight
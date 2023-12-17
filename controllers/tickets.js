const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    const flight = Flight.findById(req.params.id)
        res.render('tickets/new',{
            flight,
            title: 'Add New Ticket'
        })  
}

function create(req, res){
    const flight = Flight.findById(req.params.id, function(err, flights){
        req.body.flight = flights._id;
        req.body.price = parseInt(req.body.price);
        console.log(req.body, "<-- ticket.req.body")
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${flights._id}`, 
            flight 
            );
        })
    })
}
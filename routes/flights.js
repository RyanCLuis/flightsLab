const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get /flights/new
router.get('/new', flightsCtrl.new)

// POST /flights
router.post('/', flightsCtrl.create)

// GEt /flights
router.get('/', flightsCtrl.index)

// GEt /flights/:id
router.get('/:id', flightsCtrl.show)


module.exports = router;

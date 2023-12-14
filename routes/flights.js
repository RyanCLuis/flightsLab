const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get /flights/new
router.get('/new', flightsCtrl.new)

// GEt /flights/:id
router.get('/:id', flightsCtrl.show)

// GEt /flights
router.get('/', flightsCtrl.index)

// POST /flights
router.post('/', flightsCtrl.create)

module.exports = router;

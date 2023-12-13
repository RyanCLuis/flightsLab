const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get /flights/new
router.get('/new', flightsCtrl.new)

module.exports = router;

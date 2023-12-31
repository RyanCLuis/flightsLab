const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')
// All routes in this file will start with "/" (root)
// Post /flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create)


module.exports = router
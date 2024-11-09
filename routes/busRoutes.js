const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

router.get('/:id/location', busController.getBusLocation);

module.exports = router;

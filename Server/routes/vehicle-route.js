const express = require('express');

const router = express.Router();

odometerController = require('../controllers/odometer-controller');

router.get('/odometer/:vId', odometerController.getOdometerInfo);

module.exports = router;
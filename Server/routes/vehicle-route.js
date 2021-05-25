const express = require('express');

const router = express.Router();

odometerController = require('../controllers/odometer-controller');
tyreController = require('../controllers/tyre-controller');
locationController = require('../controllers/location-controller');

router.get('/odometer/:vId', odometerController.getOdometerInfo);
router.get('/tyre/:vId', tyreController.getTyreInfo);
router.get('/location/:vId', locationController.getLocationInfo);

module.exports = router;
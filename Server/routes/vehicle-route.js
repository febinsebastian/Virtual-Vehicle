const express = require('express');

const router = express.Router();

odometerController = require('../controllers/odometer-controller');
tyreController = require('../controllers/tyre-controller');
locationController = require('../controllers/location-controller');
vehicleController = require('../controllers/vehicle-controller');

router.get('/odometer/:vId', odometerController.getOdometerInfo);
router.get('/tyre/:vId', tyreController.getTyreInfo);
router.get('/location/:vId', locationController.getLocationInfo);
router.get('/vehicle/:vId', vehicleController.getVehicleInfo);
router.get('/vehicles', vehicleController.getAllVehicles);

module.exports = router;
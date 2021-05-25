const express = require('express');

const router = express.Router();

odometerController = require('../controllers/odometer-controller');
tyreController = require('../controllers/tyre-controller');

router.get('/odometer/:vId', odometerController.getOdometerInfo);
router.get('/tyre/:vId', tyreController.getTyreInfo);

module.exports = router;
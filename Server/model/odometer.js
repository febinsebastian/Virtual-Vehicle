const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const odometerSchema = new Schema({
    vehicleId: {type: String, required: true},
    odometer: {
        value: {type: Number, required: true},
        retrievalstatus: {type: String, required: true},
        timestamp: {type: Number, required: true},
        unit: {type: String, required: true}
    },
    distancesincereset: {
        value: {type: Number, required: true},
        retrievalstatus: {type: String, required: true},
        timestamp: {type: Number, required: true},
        unit: {type: String, required: true}
    },
    distancesincestart: {
        value: {type: Number, required: true},
        retrievalstatus: {type: String, required: true},
        timestamp: {type: Number, required: true},
        unit: {type: String, required: true}
    }
});

module.exports = mongoose.model('Odometer', odometerSchema);
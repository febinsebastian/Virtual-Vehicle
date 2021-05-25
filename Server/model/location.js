const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
        vehicleId: {type: String, required: true},
        longitude: {
          value: {type: Number, required: true},
          retrievalstatus: {type: String, required: true},
          timestamp: {type: Number, required: true}
        },
        latitude: {
          value: {type: Number, required: true},
          retrievalstatus: {type: String, required: true},
          timestamp: {type: Number, required: true}
        },
        heading: {
          value: {type: Number, required: true},
          retrievalstatus: {type: String, required: true},
          timestamp: {type: Number, required: true}
        }
});

module.exports = mongoose.model('Location', locationSchema);
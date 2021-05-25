const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tyreSchema = new Schema({
    vehicleId: {type: String, required: true},
    tirepressurefrontleft: {
        value: {type: Number, required: true},
        retrievalstatus: {type: String, required: true},
        timestamp: {type: Number, required: true},
        unit: {type: String, required: true}
    },
    tirepressurefrontright: {
        value: {type: Number, required: true},
        retrievalstatus: {type: String, required: true},
        timestamp: {type: Number, required: true},
        unit: {type: String, required: true}
    },
    tirepressurerearleft: {
        value: {type: Number, required: true},
        retrievalstatus: {type: String, required: true},
        timestamp: {type: Number, required: true},
        unit: {type: String, required: true}
    },
    tirepressurerearright: {
        value: {type: Number, required: true},
        retrievalstatus: {type: String, required: true},
        timestamp: {type: Number, required: true},
        unit: {type: String, required: true}
    }
});

module.exports = mongoose.model('Tyre', tyreSchema);
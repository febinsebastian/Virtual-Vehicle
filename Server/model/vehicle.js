const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    id: {type: String, required: true},
    licenseplate: {type: String, required: true},
    salesdesignation: {type: String, required: true},
    finorvin: {type: String, required: true},
    nickname: {type: String, required: true},
    modelyear: {type: Number, required: true},
    colorname: {type: String, required: true},
    fueltype: {type: String, required: true},
    powerhp: {type: Number, required: true},
    powerkw: {type: Number, required: true},
    numberofdoors: {type: Number, required: true},
    numberofseats: {type: Number, required: true}
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
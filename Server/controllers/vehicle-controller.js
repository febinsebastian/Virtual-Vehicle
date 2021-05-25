httpRequest = require('../model/http-request');
Vehicle = require('../model/vehicle');
const vehicleId = '1234567890ABCD1234';

httpRequest.httpGetRequest({path:vehicleId}).then((response) =>{
    //console.log(response);
    //addVehicleInfo(response);
});

const addVehicleInfo = async(params) =>{
    try {
        const vehicle = await Vehicle.find({id: params.id})
        if(vehicle.length == 0){
            const vehicleInfo = new Vehicle(params);
            await vehicleInfo.save();
        }
    } catch (error) {
        console.log(error.message);
    }
}

const getVehicleInfo = async(req, res, next) =>{
    const vId = req.params.vId;
    let vehicle;
    try {
        vehicle = await Vehicle.find({vehicleId: vId}).sort({_id:-1}).limit(1);
    } catch (error) {
        console.log(error,message);
        return next(error);
    }
    res.json(vehicle[0].toObject({getters: true}));
};
const getAllVehicles = async(req, res, next) =>{
    const vId = req.params.vId;
    let vehicle;
    try {
        vehicle = await Vehicle.find();
    } catch (error) {
        console.log(error,message);
        return next(error);
    }
    res.json(vehicle.map(item => item.toObject({getters: true})));
};

exports.getVehicleInfo = getVehicleInfo;
exports.addVehicleInfo = addVehicleInfo;
exports.getAllVehicles = getAllVehicles;
const schedule = require('node-schedule');
httpRequest = require('../model/http-request');
Vehicle = require('../model/vehicle');
odometerController = require('../controllers/odometer-controller');
tyreController = require('../controllers/tyre-controller');
locationController = require('../controllers/location-controller');

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
    let vehicle;
    try {
        vehicle = await Vehicle.find();
    } catch (error) {
        console.log(error,message);
        return next(error);
    }
    res.json(vehicle.map(item => item.toObject({getters: true})));
};
const scheduledTask = () => {
    httpRequest.httpGetRequest({path:''}).then((resp) =>{
        for(let i=0;i<resp.length;i++){
            const vehicleId = resp[i].id;
            httpRequest.httpGetRequest({path:vehicleId+'/tires'}).then((response) =>{
                response['vehicleId'] = vehicleId;
                tyreController.addTyreInfo(response);
            });
            httpRequest.httpGetRequest({path:vehicleId}).then((response) =>{
                response['vehicleId'] = vehicleId;
                addVehicleInfo(response);
            });
            httpRequest.httpGetRequest({path:vehicleId+'/odometer'}).then((response) =>{
                response['vehicleId'] = vehicleId;
                odometerController.addOdometerInfo(response);
            });
            httpRequest.httpGetRequest({path:vehicleId+'/location'}).then((response) =>{
                response['vehicleId'] = vehicleId;
                locationController.addLocationInfo(response);
            });
        }
    });
}

//scheduledTask();

const job = schedule.scheduleJob('42 * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
});

exports.getVehicleInfo = getVehicleInfo;
exports.addVehicleInfo = addVehicleInfo;
exports.getAllVehicles = getAllVehicles;
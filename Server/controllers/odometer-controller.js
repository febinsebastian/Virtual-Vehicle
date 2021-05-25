httpRequest = require('../model/http-request');
Odometer = require('../model/odometer');

const addOdometerInfo = async(params) =>{
    const odometerInfo = new Odometer(params);
    try {
        await odometerInfo.save();
    } catch (error) {
        console.log(error.message);
    }
}

const getOdometerInfo = async(req, res, next) =>{
    const vId = req.params.vId;
    let odometer;
    try {
        odometer = await Odometer.find({vehicleId: vId}).sort({_id:-1}).limit(1);
    } catch (error) {
        console.log(error,message);
        return next(error);
    }
    res.json(odometer[0].toObject({getters: true}));
    //res.json(odometer.map(item => item.toObject({getters: true})));
};

exports.getOdometerInfo = getOdometerInfo;
exports.addOdometerInfo = addOdometerInfo;
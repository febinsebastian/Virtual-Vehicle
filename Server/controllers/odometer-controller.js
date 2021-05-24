httpRequest = require('../model/http-request');
Odometer = require('../model/odometer');
const vehicleId = '1234567890ABCD1234';

httpRequest.httpGetRequest({path:vehicleId+'/odometer'}).then((response) =>{
    //addOdometerInfo(response);
});

const addOdometerInfo = async(params) =>{
    params['vehicleId'] = vehicleId;
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
httpRequest = require('../model/http-request');
Location = require('../model/location');
const vehicleId = '1234567890ABCD1234';

httpRequest.httpGetRequest({path:vehicleId+'/location'}).then((response) =>{
    //addLocationInfo(response);
});

const addLocationInfo = async(params) =>{
    params['vehicleId'] = vehicleId;
    const locationInfo = new Location(params);
    try {
        await locationInfo.save();
    } catch (error) {
        console.log(error.message);
    }
}

const getLocationInfo = async(req, res, next) =>{
    const vId = req.params.vId;
    let location;
    try {
        location = await Location.find({vehicleId: vId}).sort({_id:-1}).limit(1);
    } catch (error) {
        console.log(error,message);
        return next(error);
    }
    res.json(location[0].toObject({getters: true}));
    //res.json(Location.map(item => item.toObject({getters: true})));
};

exports.getLocationInfo = getLocationInfo;
exports.addLocationInfo = addLocationInfo;
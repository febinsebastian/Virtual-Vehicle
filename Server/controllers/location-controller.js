httpRequest = require('../model/http-request');
Location = require('../model/location');

const addLocationInfo = async(params) =>{
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
};

exports.getLocationInfo = getLocationInfo;
exports.addLocationInfo = addLocationInfo;
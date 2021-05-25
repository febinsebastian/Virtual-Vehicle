httpRequest = require('../model/http-request');
Tyre = require('../model/tyre');
const vehicleId = '1234567890ABCD1234';

httpRequest.httpGetRequest({path:vehicleId+'/tires'}).then((response) =>{
    //addTyreInfo(response);
});

const addTyreInfo = async(params) =>{
    params['vehicleId'] = vehicleId;
    const tyreInfo = new Tyre(params);
    try {
        await tyreInfo.save();
    } catch (error) {
        console.log(error.message);
    }
}

const getTyreInfo = async(req, res, next) =>{
    const vId = req.params.vId;
    let tyre;
    try {
        tyre = await Tyre.find({vehicleId: vId}).sort({_id:-1}).limit(1);
    } catch (error) {
        console.log(error,message);
        return next(error);
    }
    res.json(tyre[0].toObject({getters: true}));
    //res.json(odometer.map(item => item.toObject({getters: true})));
};

exports.getTyreInfo = getTyreInfo;
exports.addTyreInfo = addTyreInfo;
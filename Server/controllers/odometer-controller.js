httpRequest = require('../model/http-request');

httpRequest.httpGetRequest({path:'1234567890ABCD1234/location'}).then((response) =>{
    console.log(response);
});

const getOdometerInfo = (req, res, next) =>{
    res.json({message:'it is working'});
    
};

exports.getOdometerInfo = getOdometerInfo;
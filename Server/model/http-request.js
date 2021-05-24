const fetch = require('node-fetch');

const httpGetRequest = async(params) =>{
    const URL = 'https://api.mercedes-benz.com/experimental/connectedvehicle_tryout/v2/vehicles/'+params.path;
    let data;
    const options = {
        headers:{
            Accept: 'application/json',
            Authorization: 'Bearer a1b2c3d4-a1b2-a1b2-a1b2-a1b2c3d4e5f6'
        }
    }
        try {
            const res = await fetch(URL, options)
            data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
        
}

exports.httpGetRequest = httpGetRequest;
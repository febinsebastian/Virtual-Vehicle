import React, { useEffect, useState } from 'react'

const Fuel = () => {
    const [fuel, setFuel] = useState();
    useEffect(() => {
        const getFuelInfo = async() => {
            try {
                const options = {
                    headers:{
                        Accept: 'application/json',
                        Authorization: 'Bearer a1b2c3d4-a1b2-a1b2-a1b2-a1b2c3d4e5f6'
                    }
                }
                const response = await fetch('https://api.mercedes-benz.com/experimental/connectedvehicle_tryout/v2/vehicles/1234567890ABCD1234/fuel',options);
                const responseData = await response.json();
                setFuel(responseData.fuellevelpercent);
                console.log(responseData);
            } catch (error) {
                console.log(error.message);
            }
            
        };
        getFuelInfo();
    }, []);
    return (
        <div>
            <h2>{6+7}</h2>
        </div>
    )
}

export default Fuel

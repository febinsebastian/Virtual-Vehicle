import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";

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
                setFuel(() => responseData.fuellevelpercent.value);
            } catch (error) {
                console.log(error.message);
            }
            
        };
        getFuelInfo();
    }, []);
    return (
        <div className="center">
        {fuel &&
            <Chart
                width={150}
                height={150}
                chartType="Gauge"
                data={[
                  ['Label', 'Value'],
                  ['Fuel', fuel],
                ]}
                options={{
                  redFrom: 0,
                  redTo: 10,
                  yellowFrom: 10,
                  yellowTo: 20,
                  minorTicks: 5,
                }}
                rootProps={{ 'data-testid': '1' }}
                />}
        </div>
    )
}

export default Fuel

import React, { useEffect, useState } from 'react'

const Odometer = () => {
    const [odometer, setOdometerInfo] = useState();
    useEffect(() => {
        const getOdometerInfo = async() => {
            try {
                const response = await fetch('http://localhost:8000/vehicle/odometer/1234567890ABCD1234');
                const responseData = await response.json();
                //setOdometerInfo(responseData);
                setOdometerInfo({odometer:responseData});
                console.log(odometer);
            } catch (error) {
                console.log(error.message);
            }
            
        };
        getOdometerInfo();
    }, []);
    return (
        <div>
            <h2>Febin</h2>
        </div>
    )
}

export default Odometer

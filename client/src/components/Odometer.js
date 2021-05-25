import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Odometer = () => {
    const vehicleId = useParams().vehicleId;
    const [odometer, setOdometerInfo] = useState();
    useEffect(() => {
        const getOdometerInfo = async() => {
            try {
                const response = await fetch(`http://localhost:8000/vehicle/odometer/${vehicleId}`);
                const responseData = await response.json();
                setOdometerInfo(()=>responseData);
                console.log(odometer);
            } catch (error) {
                console.log(error.message);
            }
        };
        getOdometerInfo();
    }, []);
    return (
        <div className="card">
        <div className="card-header text-center">Odometer</div>
        <div className="card-body">
            {odometer &&<table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Millage</td>
                        <td>{odometer.odometer.value}</td>
                    </tr>
                    <tr>
                        <td>Distance Since Reset</td>
                        <td>{odometer.distancesincereset.value}</td>
                    </tr>
                    <tr>
                        <td>Distance Since Start</td>
                        <td>{odometer.distancesincestart.value}</td>
                    </tr>
                </tbody>
            </table>}
            </div>
        </div>
    )
}

export default Odometer

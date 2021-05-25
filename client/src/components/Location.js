import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Location = () => {
    const vehicleId = useParams().vehicleId;
    const [location, setLocationInfo] = useState();
    useEffect(() => {
        const getLocationInfo = async() => {
            try {
                const response = await fetch(`http://localhost:8000/vehicle/location/${vehicleId}`);
                const responseData = await response.json();
                setLocationInfo(()=>responseData);
            } catch (error) {
                console.log(error.message);
            }
        };
        getLocationInfo();
    }, []);
    return (
        <div className="card">
        <div className="card-header text-center">Vehicle Location</div>
        <div className="card-body">
            {location && <table className="table table-bordered">
            <tbody>
                <tr>
                <td>Heading</td>
                <td>{location.heading.value}</td>
                </tr>
                <tr>
                    <td>Longitude</td>
                    <td>{location.longitude.value}</td>
                </tr>
                <tr>
                    <td>Latitude</td>
                    <td>{location.latitude.value}</td>
                </tr></tbody>
            </table>}
        </div></div>
    )
}

export default Location

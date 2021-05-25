import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const CarList = props => {
    return (
        <div>
        {props.cars && <div>
        {props.cars.map(car => {
            return (
                <div className="card card-width mt-3" key={car.id}>
                    <div className="card-header">
                        {car.licenseplate}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{car.id}</h5>
                        <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>Sales Designation</td>
                    <td>{car.salesdesignation}</td>
                </tr>
                <tr>
                <td>Model Year</td>
                <td>{car.modelyear}</td>
                </tr>
                <tr>
                <td>nickname</td>
                <td>{car.nickname}</td>
                </tr>
                <tr>
                <td>Color</td>
                <td>{car.colorname}</td>
                </tr>
                <tr>
                <td>Fuel Type</td>
                <td>{car.fueltype}</td>
                </tr>
                </tbody>
            </table>        
                <Link to={`/${car.id}/vehicles`} className="btn btn-primary">Get More Info</Link>
                </div>
                </div>
            )
        })}
        </div>}</div>
    )
}

export default CarList

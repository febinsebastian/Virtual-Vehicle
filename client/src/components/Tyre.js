import React, { useEffect, useState } from 'react'

const Tyre = () => {
    const [tyre, setTyreInfo] = useState();
    const [count, setCount] = useState(0);
    useEffect(() => {
        /*
        const getTyreInfo = async() => {
            const response = await fetch('http://localhost:8000/vehicle/odometer/1234567890ABCD1234');
            const responseData = await response.json();
            setTyreInfo(responseData);
            setCount(10)
        };
        getTyreInfo();*/
        fetch('http://localhost:8000/vehicle/odometer/1234567890ABCD1234').then(data =>{
            const resp = data.json();
            console.log(resp);
            setTyreInfo(resp);
            setCount(10)
        });
    }, [])
    return (
        <div>
            <table className="table table-bordered">
            <tbody>
                <tr>
                    <td>{count}</td>
                    <td>Left</td>
                    <td>Right</td>
                </tr>
                <tr>
                    <td>Front</td>
                    <td>303</td>
                    <td>404</td>
                </tr>
                <tr>
                    <td>Rear</td>
                    <td>404</td>
                    <td>404</td>
                </tr></tbody>
            </table>
        </div>
    )
}

export default Tyre

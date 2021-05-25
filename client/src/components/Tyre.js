import React, { useEffect, useState } from 'react'

const Tyre = () => {
    const [tyre, setTyreInfo] = useState();
    useEffect(() => {
        const getTyreInfo = async() => {
            const response = await fetch('http://localhost:8000/vehicle/tyre/1234567890ABCD1234');
            const responseData = await response.json();
            console.log(responseData);
            setTyreInfo(()=>responseData);
        };
        getTyreInfo();
    }, [])
    return (
        <div className="card">
        <div className="card-header text-center">Tyre Pressures</div>
        <div className="card-body">
            {tyre && <table className="table table-bordered">
            <tbody>
                <tr>
                    <td></td>
                    <td>Left</td>
                    <td>Right</td>
                </tr>
                <tr>
                    <td>Front</td>
                    <td>{tyre.tirepressurefrontleft.value}</td>
                    <td>{tyre.tirepressurefrontright.value}</td>
                </tr>
                <tr>
                    <td>Rear</td>
                    <td>{tyre.tirepressurerearleft.value}</td>
                    <td>{tyre.tirepressurerearright.value}</td>
                </tr></tbody>
            </table>}
        </div></div>
    )
}

export default Tyre

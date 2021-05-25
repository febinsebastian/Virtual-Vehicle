import React from 'react';
import { Link } from 'react-router-dom'; 

const MainHeader = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="row">
                <div className="col"><Link to="/" className="navbar-brand mb-0 h1">Home</Link></div>
                <div className="col"><a href="#" className="float-end">GitHub</a></div>
                </div>
            </div>
        </nav>
    )
}

export default MainHeader

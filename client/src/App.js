import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import MainHeader from './components/MainHeader';
import Odometer from './components/Odometer';
import Fuel from './components/Fuel';
import Tyre from './components/Tyre';
import Location from './components/Location';
import CarList from './components/CarList';

function App() {
  const [carList, setCarsInfo] = useState();
  const [vehicleId, setVehicleId] = useState();
    useEffect(() => {
        const getCarsInfo = async() => {
            try {
                const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/vehicles');
                const responseData = await response.json();
                setCarsInfo(()=>responseData);
                setVehicleId(()=>responseData[0].id);
            } catch (error) {
                console.log(error.message);
            }
        };
        getCarsInfo();
    }, []);

    const routes = (
      <Switch>
      <Route path="/" exact>
      <div className="container mt-3">
        <div className="row"><CarList cars={carList} /></div>
      </div>
      </Route>
      <Route path="/:vehicleId/vehicles" exact>
      <div className="container mt-3">
        <div className="row">
          <div className="col"><Tyre/></div>
          <div className="col"><Odometer/></div>
          <div className="col"><Fuel/></div>
        </div>
        <div className="row mt-3">
          <div className="col-sm"><Location/></div>
        </div>
      </div>
      </Route>
    </Switch>
    )
  return (
    <Router>
      <MainHeader/>
      <div className="contrainer">
        <div className="row">
          <h2 className="text-center">Experimental Connected Vehicle</h2>
        </div>
      </div>
      <main>
        {routes}
      </main>
    </Router>
  );
}

export default App;

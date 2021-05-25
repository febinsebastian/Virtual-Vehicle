import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Odometer from './components/Odometer';
import Fuel from './components/Fuel';
import Tyre from './components/Tyre';
import Location from './components/Location';

function App() {
  return (
    <Router>
      <Route path="/" exact>
      <MainHeader/>
      <div className="container mt-3">
        <div className="row">
          <div className="col"><Tyre/></div>
          <div className="col"><Odometer/></div>
          <div className="col"><Fuel/></div>
        </div>
        <div className="row mt-3">
          <div className="col"><Location/></div>
        </div>
      </div>
      </Route>
    </Router>
  );
}

export default App;

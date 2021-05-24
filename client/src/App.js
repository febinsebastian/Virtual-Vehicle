import './App.css';
import MainHeader from './components/MainHeader';
import Odometer from './components/Odometer';
import Fuel from './components/Fuel';

import {BrowserRouter as Router} from 'react-router-dom';
import Tyre from './components/Tyre';

function App() {
  return (
    <Router>
      <MainHeader/>
      <div className="container">
        <div className="row">
          <div className="col"><Tyre/></div>
          <div className="col"><Odometer/></div>
          <div className="col"><Fuel/></div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import Loading from './components/LoadingBox/Loading';
import RocketDetails from './components/RocketDetails/RocketDetails';
import  Navbar  from './components/Navbar/Navbar';

import History from './pages/History/History';
import Rockets from './pages/Rockets/Rockets';


function App() {
  const [loading, setLoading] = useState(true);
  const [spacex, setSpacex] = useState([]);
  const [rockets] = useState([]);
  const [rocketdata, setRocketdata] = useState({});
 

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      clearTimeout(loadingTimer);

      axios.get('https://api.spacexdata.com/v5/launches').then((response) => {
        setSpacex(response.data);
        setLoading(false);
      });

      axios.get('https://api.spacexdata.com/v4/rockets').then((response) => {
        setRocketdata(response.data);
        setLoading(false);
      });

      

    }, 1000);
  }, []);

  return (
    <div className="app">
     
      <div className="header">
        <Navbar />
      </div>

      <div className="content">
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route 
              exact path="/" render={() => {
                return (
                  <History spacex={spacex} />
              );
            }} />


            <Route 
              exact path="/rockets" render={() => {
                return (
                  <Rockets rockets={rockets} />
              );
            }} />

         
            

            /
            <Route path="/rockets/:rocketId" component={RocketDetails} /> 
          </Switch> 
        )}
      </div>
    </div>
  );
}

export default App;
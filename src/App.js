import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import Folleto from './Components/Folleto';
import Rotafolio from './Components/Rotafolio';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import PPAplicacion from './Components/Pre_Post_Aplicacion';

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-205618770-1');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/duraphat" component={() => <Rotafolio></Rotafolio>} />
          <Route exact path="/pp_aplicacion" component={() => <PPAplicacion></PPAplicacion>} />
          <Route exact path="/folleto" component={() => <Folleto></Folleto>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Folleto from './Components/Folleto';
import Rotafolio from './Components/Rotafolio';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/duraphat" component={Rotafolio} />
          <Route exact path="/folleto" component={Folleto} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

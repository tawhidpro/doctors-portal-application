import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/appointment">
            <Appointment/>
        </Route>
        <Route path="/">
            <Home/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

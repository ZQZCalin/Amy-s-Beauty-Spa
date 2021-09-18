import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Home from "./Pages/Home";
import People from './Pages/People';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />

      <Switch>
        <Route path="/people">
          <People />
        </Route>

        <Route path="/service">
          <Service />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

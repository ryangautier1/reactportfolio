import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Background from './components/Background';

function App() {
  Background();

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          {/* <Route exact path="/projects" component={Projects}>
            <Projects />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

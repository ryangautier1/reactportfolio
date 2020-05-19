import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          {/* <Route exact path="/contact">
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

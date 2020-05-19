import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Homepage}/>
         <Route exact path="/reactportfolio" component={Homepage}/>
        
      </div>
    </Router>
  );
}

export default App;

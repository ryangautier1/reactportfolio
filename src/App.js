import React from 'react';
import Navbar from './components/Navbar';
import HomeBackground from './components/HomeBackground';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <div>
    <HomeBackground />
    <Navbar />
    <HomeContent />
    </div>
  );
}

export default App;

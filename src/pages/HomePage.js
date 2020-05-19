import React from 'react';
import HomeBackground from '../components/HomeBackground';
import HomeContent from '../components/HomeContent';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div>
      <HomeBackground />
      <Navbar />
      <HomeContent />
    </div>
  )
}

export default HomePage;
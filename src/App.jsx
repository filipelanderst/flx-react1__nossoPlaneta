import React from 'react';
import CoastalSeas from './components/CoastalSeas';
import DesertFields from './components/DesertFields';
import Footer from './components/Footer';
import Forests from './components/Forests';
import FreshWater from './components/FreshWater';
import FrozenWorlds from './components/FrozenWorlds';
import Header from './components/Header';
import HighSeas from './components/HighSeas';
import Jungles from './components/Jungles';
import OnePlanet from './components/OnePlanet';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='xl:grid xl:grid-cols-2'>
        <OnePlanet />
        <FrozenWorlds />
        <Jungles />
        <Forests />
        <DesertFields />
        <FreshWater />
        <CoastalSeas />
        <HighSeas />
      </div>
      <Footer />
    </div>
  );
};

export default App;

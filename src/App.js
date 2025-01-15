import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Drivers from './Pages/Drivers';
import Vehicles from './Pages/Vehicles';
import About from './Pages/About';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Drivers" element={<Drivers />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/About" element={<About />} />
      </Routes>
  );
};

export default App;

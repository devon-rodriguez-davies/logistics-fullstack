import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Drivers" element={<Home />} />
        <Route path="/Vehicles" element={<Home />} />
        <Route path="/About" element={<Home />} />
      </Routes>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navBar';
import Home from './components/Home';
import Items from './components/items/itemList';
import Reserves from './components/reservations/reserveList';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Doctors" element={<Items />} />
      <Route exact path="/reservations" element={<Reserves />} />
    </Routes>
  </BrowserRouter>
);

export default App;

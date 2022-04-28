import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navBar';
import Home from './components/items/itemList';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NewListing from './components/macro/NewListing';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='newListing' element={<NewListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

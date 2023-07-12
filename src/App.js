import logo from '../src/assets/logo.png';
import React, { useState } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Logement from './pages/Logement';
import About from './pages/About';
import Page404 from './pages/Page404';

function SearchQuery() {
  return useParams();
}

function App() {

  return (
    <Routes>
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
  );
}

export default App;
export { SearchQuery};


/*
<Route path="/" element={<HomePage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Logement" element={<HomePage />} />
            <Route path="/Logement/:id" element={<Logement />} />
            */
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css'
import App from './App';

import HeaderMenu from './components/HeaderMenu';
import Footer from './components/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <HeaderMenu />

      <App />

      <Footer />
    </Router>
  </React.StrictMode>
);


import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css'
import App from './App';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <App />

      <Footer />
    </Router>
  </React.StrictMode>
);


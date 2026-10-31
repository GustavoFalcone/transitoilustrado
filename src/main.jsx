import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import './refinement.css';
import './final-refinement.css';
import './traffic-palette.css';
import './traffic-elements.css';
import './traffic-adaptation.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);

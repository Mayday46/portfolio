import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <Router>
  //   <App />
  // </Router>
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename='/portfolio'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import BrowserRouter from 'react-router-dom'
import './index.css';
import App from './App';


root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


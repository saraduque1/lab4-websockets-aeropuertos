import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Asegúrate de que index.css contenga los estilos globales necesarios
import App from './App'; 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

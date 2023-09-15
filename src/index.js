import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/simple-grid.css';
import './global.css';
import App from './App';
import config from './config.json';
// import * as serviceWorker from './serviceWorker';

console.log('Using API ' + config.API_BASE);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// serviceWorker.register();

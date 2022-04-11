import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreContextProvider } from './store/StoreContext';

ReactDOM.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

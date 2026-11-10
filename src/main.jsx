import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { initCloud } from './cloud';
import App from './App';
import './styles.css';

// Wire Firebase auth + sync to the store before the app renders.
initCloud(store);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from 'store';
import './firebase'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './store';
import { ServiceProvider } from "./components/service-context";
import Service from './services';

import './null-style.css';
import './index.css';


const service = new Service();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ServiceProvider value={service}>
        <App />
      </ServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
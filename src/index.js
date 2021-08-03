import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Rutas from './componentes/rutas/RutaPrincipal';
import store from './global/store';
import './index.css';
// import Union from './Union';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Rutas />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

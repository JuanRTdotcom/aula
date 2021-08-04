import React              from 'react';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import Rutas              from './componentes/rutas/RutaPrincipal';
import store              from './global/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Rutas />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



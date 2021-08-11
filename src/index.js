import React              from 'react';
import ReactDOM           from 'react-dom';
// import { Provider }       from 'react-redux';
import Rutas              from './componentes/rutas/RutaPrincipal';
// import store              from './global/store';
import {Context} from './contextos/userContext';
import './index.css';

ReactDOM.render(
  <Context.Provider value={{
      stateUserLogin:1
      
  }}>    
    <React.StrictMode>
      <Rutas />
    </React.StrictMode>    
  </Context.Provider>
    ,
  document.getElementById('root')
);



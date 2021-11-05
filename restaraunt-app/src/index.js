import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Rutas from "./routes/Rutas"
import Nav from "./components/navigation/nav"

ReactDOM.render(
  <React.StrictMode>
    <Nav /> 
    <Rutas />
  </React.StrictMode>,
  document.getElementById('root')
);
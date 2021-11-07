import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Nav from "./components/navigation/nav"
import Footer from "./components/footer/footer"
import Body from "./components/body/body"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Body />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
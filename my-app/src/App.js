import './App.css';
import React from 'react';
import Header from './Header';
import Contenedor1 from './Contenedor1';
import Contenedor2 from './Contenedor2';
import Contenedor3 from './Contenedor3';
import Contenedor4 from './Contenedor4';
//import React, { Component } from "react";
import ReactDOM from "react-dom";

function App() {
  return (

    <div className="App">

      <Header />

      <Contenedor1 />

      <hr className="App-raya" />

      <Contenedor2 />

      <hr className="App-raya" />
      
      <Contenedor3 />

      <hr className="App-raya" />

      <Contenedor4 />

      </div>

  );

}


export default App;

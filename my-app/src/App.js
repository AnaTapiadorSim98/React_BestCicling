import './App.css';
import React from 'react';
import Header from './Header';
import Contenedor1 from './Contenedor1';
import Contenedor2 from './Contenedor2';
import Contenedor3 from './Contenedor3';
import Contenedor4 from './Contenedor4';
import SecondPage from './second-page/second-page';
//import React, { Component } from "react";
import ReactDOM from "react-dom";
//import { Route, Router, Switch } from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FirstPage from './FirstPage';

function App() {
  return (

    <div className="App">

      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={()=> <SecondPage/>}/>
          <Route path="/clases" exact component={()=><SecondPage/>}/>
          <Route path="/clases/reproductor" exact component={()=><SecondPage/>}/>
        </Switch>
      </Router>

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

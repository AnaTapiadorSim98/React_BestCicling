//import logo from './logo.svg';
//import logo from './imagenes/logo-big-black.png';
import './App.css';
import { AppBar, Toolbar } from "@material-ui/core";
import logo from './imagenes/logo-big.png';
import logo2 from './imagenes/logo_naranja.png';
//import Header from './header/Header';
import React from 'react';
import Frame from 'react-frame-component';
import Header from './header/Header';
import FirstPage from './FirstPage/FirstPage';
import customData2 from './db.json';
import ReactJson from 'react-json-view'

const customData = require('./db.json');
const nombre =  customData.profile.name ;


// Aitana Landáburu García

//<ReactJson src={customData.profile.name.toString()} />
function App() {
  return (
    
    
    <div className="App">
      
      <div className="App-actual-header">
        <img src={logo}  className="App-logo" alt="logo" />
      </div>
  
        <div className="contenedor">          
          <img src={logo2} align="left" className="App-actual-logo2" />
           <div className="formsNombre"  > 
                {nombre}   
            </div>
           <div className="formsUbicacion">Valecia, Spain</div>                  
        </div>

        <hr/>

        <div className="contenedor2"> 
          
            <table className="App-table-ini">
          

            <tr>

            <th></th>

            <th className="App-table-separacion" >
              {customData.profile.level}
            </th>

            <th className="App-table-separacion">
              {customData.profile.perseverance}
            </th>

            <th className="App-table-separacion">
              {customData.profile.mind_points}
            </th>


            </tr>

            <tr>

            <th></th>

            <td className="App-table">NIVEL</td>

            <td className="App-table">CONSTANCIA</td>

            <td className="App-table">PUNTOS</td>

            </tr>
            </table>

        </div> 

          <hr/>
          <div className="contenedor3"> 
          </div> 
          <hr/>
          <div className="contenedor4"> 
          </div> 
          
    </div>
        
  );
}
export default App;


//function App() {
 // return (

  /*  <div className="App">
        <header className="App-use-head">
          <title>
          <img src={nlogo} className="App-logo" alt="logo" />
          </title>
        </header>
      </div>
      */
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
 // );
//}




//export default App;

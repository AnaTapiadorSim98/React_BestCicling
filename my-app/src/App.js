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
              {customData.profile.total_points}
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
          <table className="App-table-ini2">
          

          <tr>

          <th></th>

          <th className="circulo1" >
            {customData.profile.stamina_points}
          </th>

          <th className="circulo2">
            {customData.profile.strength_points}
          </th>

          <th className="circulo3">
            {customData.profile.flexiblity_points}
          </th>

          <th className="circulo4">
            {customData.profile.mind_points}
          </th>


          </tr>

          <tr>

          <th></th>

          <td className="App-table2">Resistencia</td>

          <td className="App-table2">Fuerza</td>

          <td className="App-table2">Flexibilidad</td>

          <td className="App-table2">Mente</td>

          </tr>
          </table>
          </div> 
          <hr/>

          <div className="contenedor4"> 

          <table className="App-table-ini3">
          

          <tr>
          <th className="App-table3-separacion" >
            ULTIMAS CLASES
          </th>
          <th >      
          </th>
          <th >
            BOTON
          </th>
          </tr>

          <tr>
          <td className="App-table3">NIVEL</td>
          <td className="App-table3">CONSTANCIA</td>
          <td className="App-table3">PUNTOS</td>
          </tr>

          <tr>
          <td className="App-table3">NIVEL</td>
          <td className="App-table3">CONSTANCIA</td>
          <td className="App-table3">PUNTOS</td>
          </tr>
          </table>

          </div> 
          
    </div>
        
  );
}
export default App;

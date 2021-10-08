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
//var d = new Date(customData.training_classes[2].published.valueOf());

function tranformar_fecha(number) {

  const dateObject = new Date(number);
  var mes = dateObject.toLocaleString("es-ES", {month: "short"}) // December
  var dia =dateObject.toLocaleString("es-ES", {day: "numeric"}) // 9
  var anno =dateObject.toLocaleString("es-ES", {year: "numeric"}) // 2019

  return dia + " " + mes.charAt(0).toUpperCase() +  mes.slice(1) + " " + anno;
}

function obtener_instructor(numero) {
  var i = 0;
  while(1 <  Object.keys(customData.instructors).length ){
      if (numero == customData.instructors[i].id){
        return customData.instructors[i].name;
      }
      i++;
  }

}

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

        <hr className="App-raya"/>

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

          <hr className="App-raya"/>
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
          <hr className="App-raya"/>

          <div className="contenedor4"> 

          

          <div class="grid-container">
          <div class="grid-item">

          ÚLTIMAS CLASES

          </div>

          <div class="grid-item">

          
          
          </div>
          <div class="grid-item">
            BOTON
          </div>
          <div class="grid-item">
          <div className="contenedor_grid">          
            <img src={logo} align="left" className="App-logo-mini" />
            <div className="App-fecha-mini"> {tranformar_fecha(customData.training_classes[1].published)} </div>      
            <div className="desplazar-contenedor-gris"> <div className="contenedor-gris"> 
                <div className="letras_mini_blancas"> {customData.training_classes[1].name} </div>
                
                <div className="letras_mini_gris"> {obtener_instructor(customData.training_classes[1].instructor_id)} </div>
          </div>

          </div>            
          </div>
          </div>
          <div class="grid-item">
          <div className="contenedor_grid">          
            <img src={logo} align="left" className="App-logo-mini" />
            <div className="App-fecha-mini"> {tranformar_fecha(customData.training_classes[2].published)} </div>      
            <div className="desplazar-contenedor-gris"> <div className="contenedor-gris"> 
                <div className="letras_mini_blancas"> {customData.training_classes[2].name} </div>
                
                <div className="letras_mini_gris"> {obtener_instructor(customData.training_classes[2].instructor_id)} </div>
          </div>

          </div>            
          </div>
          </div>
          <div class="grid-item">
          <div className="contenedor_grid">          
            <img src={logo} align="left" className="App-logo-mini" />
            <div className="App-fecha-mini"> {tranformar_fecha(customData.training_classes[3].published)} </div>      
            <div className="desplazar-contenedor-gris"> <div className="contenedor-gris"> 
                <div className="letras_mini_blancas"> {customData.training_classes[3].name} </div>
                
                <div className="letras_mini_gris"> {obtener_instructor(customData.training_classes[3].instructor_id)} </div>
          </div>

          </div>            
          </div>
          </div>
          <div class="grid-item">
          <div className="contenedor_grid">          
            <img src={logo} align="left" className="App-logo-mini" />
            <div className="App-fecha-mini"> {tranformar_fecha(customData.training_classes[4].published)} </div>      
            <div className="desplazar-contenedor-gris"> <div className="contenedor-gris"> 
                <div className="letras_mini_blancas"> {customData.training_classes[4].name} </div>
                
                <div className="letras_mini_gris"> {obtener_instructor(customData.training_classes[4].instructor_id)} </div>
          </div>

          </div>            
          </div>
          </div>
          <div class="grid-item">
          <div className="contenedor_grid">          
            <img src={logo} align="left" className="App-logo-mini" />
            <div className="App-fecha-mini"> {tranformar_fecha(customData.training_classes[5].published)} </div>      
            <div className="desplazar-contenedor-gris"> <div className="contenedor-gris"> 
                <div className="letras_mini_blancas"> {customData.training_classes[5].name} </div>
                
                <div className="letras_mini_gris"> {obtener_instructor(customData.training_classes[5].instructor_id)} </div>
          </div>

          </div>            
          </div>
          </div>
          <div class="grid-item">
          <div className="contenedor_grid">          
            <img src={logo} align="left" className="App-logo-mini" />
            <div className="App-fecha-mini"> {tranformar_fecha(customData.training_classes[6].published)} </div>      
            <div className="desplazar-contenedor-gris"> <div className="contenedor-gris"> 
                <div className="letras_mini_blancas"> {customData.training_classes[6].name} </div>
                
                <div className="letras_mini_gris"> {obtener_instructor(customData.training_classes[6].instructor_id)} </div>
          </div>

          </div>            
          </div>
          </div>
          </div>

          </div> 
          
    </div>
        
  );
}
export default App;

import React from 'react';
import logo from '../imagenes/logo-big.png';
import App from '../App';
import FirstPage from '../FirstPage';

function tranformar_fecha(number) {
    
    const dateObject = new Date(number);
    var mes = dateObject.toLocaleString("es-ES", { month: "short" }) // December
    var dia = dateObject.toLocaleString("es-ES", { day: "numeric" }) // 9
    var anno = dateObject.toLocaleString("es-ES", { year: "numeric" }) // 2019
  
    return dia + " " + mes.charAt(0).toUpperCase() + mes.slice(1) + " " + anno;
    
  }
  
  function obtener_instructor(numero) {
    var i = 0;
    while (1 < Object.keys(customData.instructors).length) {
      if (numero == customData.instructors[i].id) {
        return customData.instructors[i].name;
      }
      i++;
    }
  
  }
  
  const customData = require('../db.json');


  function lanzar_clases() {
    window.open('../FirstPage', 'Todas las clases')
  
  // this.props.history.push({to: 'https://google.com'});
  }

const Contenedor4 = () =>  (

    
    <div className="contenedor4">



        <div class="grid-container">
          <div class="grid-item">

            <div class="letra_blancas"> ÚLTIMAS CLASES </div>

          </div>

          <div class="grid-item">



          </div>
          <div class="grid-item">
            <div class="letra_gris">
              <button type="button" onClick={lanzar_clases}>
                VER TODAS
              </button>

            </div>
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

    
);


export default Contenedor4;
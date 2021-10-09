import '../App.css';
import React from 'react';
import Header from '../Header';

import ReactDOM from "react-dom";

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


function genera_tabla() {

  
  var body = document.getElementsByTagName("body")[0];
  //var body = document.getElementsByTagName("app")[0];
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // Crea las celdas
  for (var i = 0; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    for (var j = 0; j < 2; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
  // posiciona el <tbody> debajo del elemento <table>

  while(tabla.hasChildNodes){
    tabla.remove();
  }

  tabla.appendChild(tblBody);
  //tabla.removeChild(tblBody)
  while(body.hasChildNodes){
    body.remove();
  }
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");


}

function FirstPage() {
  
  return (
    
    <div className="App" id="App" tagName="app">
      <Header />
     {genera_tabla()}
    </div> 
  )
  
  ;
}



//<script >{makeGrid()}</script>
//<table id="Tabla-Clases-Dinamicas"></table>
export default FirstPage;
//import React from "react";
import lesson_image_example from "../images/lesson_image_example.png"
import React, {Component} from "react";

const customData = require('../db.json');
const nombre = customData.profile.name;

function tranformar_fecha(number) {
    
    const dateObject = new Date(number);
    var mes = dateObject.toLocaleString("es-ES", { month: "short" }) // December
    var dia = dateObject.toLocaleString("es-ES", { day: "numeric" }) // 9
    var anno = dateObject.toLocaleString("es-ES", { year: "numeric" }) // 2019
  
    return dia + " " + mes.charAt(0).toUpperCase() + mes.slice(1) ;
    
  }

  function tranformar_duracion(number) {
    
    let res = Math.floor(number / 60);
    return "Duración " + res + "'";
    
  }
  
  function obtener_instructor(numero) {
    let contador = 1;
    while (contador < Object.keys(customData.instructors).length) {
      if (numero == customData.instructors[contador].id) {
        return customData.instructors[contador].name;
      }
      contador++;
    }
  
  }

export function ListadoClases() {
    return (
        <div className="List">
            <ListadoClase/>
        </div>
    );
}

function ListadoClase() {
    
    const listaClases = []; 
    let j = 0;
    const nombresDeClases = [];
    while(j < Object.keys(customData.instructors).length){
        nombresDeClases.push(customData.training_classes[j].name);
        j++;
    }

    
    let i = 0;
    for (let nombreDeClase of nombresDeClases) {
        listaClases.push(<UnaClase key={i} my_var={nombreDeClase} />)
        i++;
    }

    return (
        <div className="LessonsContainer">
            <div className="container">
                <div className="row row-cols-3">
                    {listaClases}
                </div>
            </div>
        </div>
    );
}

export function ListadoNombres() {
    return (
        <div className="List">
            <ListadoNombre/>
        </div>
    );
}

function ListadoNombre() {
    
    const listaNombres = []; 
    let j = 0;
    const nombres = [];
    while(j < Object.keys(customData.instructors).length){
        nombres.push(obtener_instructor(customData.training_classes[j].instructor_id));
        j++;
    }

    
    let i = 100;
    for (let nombre of nombres) {
        listaNombres.push(<UnaClase key={i} my_name={nombre} />)
        i++;
    }

    return (
        <div> {listaNombres}</div>
                   
                
    );
}

export function ListadoImagenes() {
    return (
        <div className="List">
            <ListadoImagen/>
        </div>
    );
}

function ListadoImagen() {
    
    const listaImagenes = []; 
    let j = 0;
    const imagenes = [];
    while(j < Object.keys(customData.instructors).length){
        imagenes.push(obtener_instructor(customData.training_classes[j].image));
        j++;
    }

    
    let i = 100;
    for (let imagen of imagenes) {
        listaImagenes.push(<UnaClase key={i} my_image={imagen} />)
        i++;
    }

    return (
        <div> {listaImagenes}</div>
                   
                
    );
}

export function ListadoFechas() {
    return (
        <div className="List">
            <ListadoFecha/>
        </div>
    );
}

function ListadoFecha() {
    
    const listaFechas = []; 
    let j = 0;
    const fechas = [];
    while(j < Object.keys(customData.instructors).length){
        fechas.push(tranformar_duracion(customData.training_classes[j].duration));
        j++;
    }

    
    let i = 100;
    for (let fecha of fechas) {
        listaFechas.push(<UnaClase key={i} my_date={fecha} />)
        i++;
    }

    return (
        <div> {listaFechas}</div>
                   
                
    );
}

class UnaClase extends Component {
    render () {
        return (    
        <div id={this.props.key} className="col">
            <div className="lesson_element col">
                <a href="/clases/reproductor">
                    <div className="lesson_content">
                        <div className="list_lesson_description">
                            <h4 className="lesson_title">{ this.props.my_var }</h4>
                            <span className="lesson_teacher_name"> Lucia Carreño</span>
                        </div>
                        <img src={ lesson_image_example 
                        } alt="imagen de portada de clase"/>
                        <div className="lesson_footer">
                            <table className="fixed_table">
                                <thead>
                                <tr>
                                    <th className="first_column">
                                        <span className="level_dots level_two_lesson">
                                            <span>Nivel</span>
                                            <span className="dot"/>
                                            <span className="dot"/>
                                            <span className="dot"/>
                                        </span>
                                    </th>
                                    <th className="second_column">12 Jun</th>
                                    <th className="third_column">Duración 52'</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <span className="corner_triangle yellow_triangle"/>
                    </div>
                </a>
            </div>
        </div>);
    }
}

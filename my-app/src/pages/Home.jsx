import React from "react";
import best_cycling_icon from '../images/best_cycling_orange_icon.png';
import location_pointer_icon from '../images/location_pointer_icon.png';
import short_logo from '../images/short_cycling_logo.png';

const customData = require('../db.json');
const nombre = customData.profile.name;

export function Home() {
    return (
        <div className="Home">
            <Profile/>
            <Stats/>
            <Lessons/>
        </div>
    );
}

function tranformar_fecha(number) {
    
    const dateObject = new Date(number);
    var mes = dateObject.toLocaleString("es-ES", { month: "short" }) // December
    var dia = dateObject.toLocaleString("es-ES", { day: "numeric" }) // 9
    var anno = dateObject.toLocaleString("es-ES", { year: "numeric" }) // 2019
  
    return dia + " " + mes.charAt(0).toUpperCase() + mes.slice(1) + " " + anno;
    
  }
  
  function obtener_instructor(numero) {
    var i = 1;
    while (i < Object.keys(customData.instructors).length) {
      if (numero == customData.instructors[i].id) {
        return customData.instructors[i].name;
      }
      i++;
    }
  
  }

function Profile() {
    return (
        <>
        <div className="ProfileData flow_root_container">
            <img id="best_cycling_icon" src={ best_cycling_icon } alt={"profile"}/>
            <div id="profile_info_container" >
                <h2>{nombre}</h2>
                <div className="flow_root_container">
                    <img src={ location_pointer_icon } alt={"location icon"}/>
                    <h4>Valencia, Spain</h4>
                </div>
            </div>
        </div>
        <hr className="separation_line"/>
        </>
    );
}

function Stats() {
    return (
        <>
            <StatData/>
            <hr className="separation_line"/>
            <StatIcons/>
            <hr className="separation_line"/>
        </>
    );
}

function StatData() {
    return (
        <div className="StatData">
            <table className="fixed_table">
                <thead>
                <tr>
                    <th>{customData.profile.level}</th>
                    <th>{customData.profile.perseverance}</th>
                    <th>{customData.profile.total_points}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>NIVEL</td>
                    <td>CONSTANCIA</td>
                    <td>PUNTOS</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

function StatIcons() {
    return (
        <div className="StatIcons">
            <table className="fixed_table">
                <thead>
                <tr>
                    <th><div className="dot yellow"><span>{customData.profile.stamina_points}</span></div></th>
                    <th><div className="dot red"><span>{customData.profile.strength_points}</span></div></th>
                    <th><div className="dot green"><span>{customData.profile.flexiblity_points}</span></div></th>
                    <th><div className="dot blue"><span>{customData.profile.mind_points}</span></div></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Resistencia</td>
                    <td>Fuerza</td>
                    <td>Flexibilidad</td>
                    <td>Mente</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

function Lessons() {
    return (
        <div className="LessonsContainer">
            <div className="flow_root_container">
                <h3>ÚLTIMAS CLASES</h3>
                <a href="/clases" >VER TODAS</a>
            </div>
            <div className="container">
                <div className="row row-cols-3">
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">{tranformar_fecha(customData.training_classes[1].published)}</span>
                            </div>
                            <a href="/clases">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">{customData.training_classes[1].name}</h4>
                                    <span className="lesson_teacher_name">{obtener_instructor(customData.training_classes[1].instructor_id)}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">{tranformar_fecha(customData.training_classes[2].published)}</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">{customData.training_classes[2].name}</h4>
                                    <span className="lesson_teacher_name">{obtener_instructor(customData.training_classes[2].instructor_id)}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">{tranformar_fecha(customData.training_classes[3].published)}</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">{customData.training_classes[3].name}</h4>
                                    <span className="lesson_teacher_name">{obtener_instructor(customData.training_classes[3].instructor_id)}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">{tranformar_fecha(customData.training_classes[4].published)}</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">{customData.training_classes[4].name}</h4>
                                    <span className="lesson_teacher_name">{obtener_instructor(customData.training_classes[4].instructor_id)}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">{tranformar_fecha(customData.training_classes[5].published)}</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">{customData.training_classes[5].name}</h4>
                                    <span className="lesson_teacher_name">{obtener_instructor(customData.training_classes[5].instructor_id)}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">{tranformar_fecha(customData.training_classes[6].published)}</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">{customData.training_classes[6].name}</h4>
                                    <span className="lesson_teacher_name">{obtener_instructor(customData.training_classes[6].instructor_id)}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

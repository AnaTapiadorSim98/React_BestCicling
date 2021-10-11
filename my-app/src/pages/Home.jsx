/*import React from 'react';
import Contenedor1 from '../Contenedor1';
import Contenedor2 from '../Contenedor2';
import Contenedor3 from '../Contenedor3';
import Contenedor4 from '../Contenedor4';

export function Home() {
    return (
        <div className="Home">
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
*/

import React from "react";
import best_cycling_icon from '../images/best_cycling_orange_icon.png';
import location_pointer_icon from '../images/location_pointer_icon.png';
import short_logo from '../images/short_cycling_logo.png';

export function Home() {
    return (
        <div className="Home">
            <Profile/>
            <Stats/>
            <Lessons/>
        </div>
    );
}

function Profile() {
    return (
        <>
        <div className="ProfileData flow_root_container">
            <img id="best_cycling_icon" src={ best_cycling_icon } alt={"profile"}/>
            <div id="profile_info_container" >
                <h2>Aitana Landáburu García</h2>
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
                    <th>3</th>
                    <th>129</th>
                    <th>1020</th>
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
                    <th><div className="dot yellow"><span>38</span></div></th>
                    <th><div className="dot red"><span>3</span></div></th>
                    <th><div className="dot green"><span>120</span></div></th>
                    <th><div className="dot blue"><span>14</span></div></th>
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
                                <span className="lesson_date">12 Ene 2018</span>
                            </div>
                            <a href="/clases">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                    <span className="lesson_teacher_name">Lorena Isasi</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">12 Ene 2018</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                    <span className="lesson_teacher_name">Lorena Isasi</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">12 Ene 2018</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                    <span className="lesson_teacher_name">Lorena Isasi</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <div className="lesson_header">
                                <img src={ short_logo } alt="logo best cycling clase" />
                                <span className="lesson_date">12 Ene 2018</span>
                            </div>
                            <a href="/clases" target="_blank" rel="noreferrer">
                                <div className="lesson_content">
                                    <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                    <span className="lesson_teacher_name">Lorena Isasi</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

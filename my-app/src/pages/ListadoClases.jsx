/*import React from 'react';
import Contenedor1 from '../Contenedor1';
import Contenedor2 from '../Contenedor2';
import Contenedor3 from '../Contenedor3';
import Contenedor4 from '../Contenedor4';

export function ListadoClases() {
    return (
        <div className="Home">
            <Contenedor1 />
        </div>
    );
}*/

import React from "react";
import lesson_image_example from "../images/lesson_image_example.png"


/*export function ListadoClases() {
    return (
        <div className="List">
            <ListadoClases/>
        </div>
    );
}*/

export function ListadoClases() {
    return (
        <div className="LessonsContainer">
            <div className="container">
                <div className="row row-cols-3">
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
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
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
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
                                    <span className="corner_triangle red_triangle"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
                                    <div className="lesson_footer">
                                        <table className="fixed_table">
                                            <thead>
                                            <tr>
                                                <th className="first_column">
                                                    <span className="level_dots level_one_lesson">
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
                                    <span className="corner_triangle red_triangle"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
                                    <div className="lesson_footer">
                                        <table className="fixed_table">
                                            <thead>
                                            <tr>
                                                <th className="first_column">
                                                    <span className="level_dots level_three_lesson">
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
                                    <span className="corner_triangle purple_triangle"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
                                    <div className="lesson_footer">
                                        <table className="fixed_table">
                                            <thead>
                                            <tr>
                                                <th className="first_column">
                                                    <span className="level_dots level_one_lesson">
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
                                    <span className="corner_triangle green_triangle"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
                                    <div className="lesson_footer">
                                        <table className="fixed_table">
                                            <thead>
                                            <tr>
                                                <th className="first_column">
                                                    <span className="level_dots level_three_lesson">
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
                                    <span className="corner_triangle red_triangle"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
                                    <div className="lesson_footer">
                                        <table className="fixed_table">
                                            <thead>
                                            <tr>
                                                <th className="first_column">
                                                    <span className="level_dots level_three_lesson">
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
                                    <span className="corner_triangle red_triangle"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lesson_element col">
                            <a href="/clases/reproductor">
                                <div className="lesson_content">
                                    <div className="list_lesson_description">
                                        <h4 className="lesson_title">BC13 / Las tres montañas</h4>
                                        <span className="lesson_teacher_name">Lorena Isasi</span>
                                    </div>
                                    <img src={ lesson_image_example } alt="imagen de portada de clase"/>
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
                                    <span className="corner_triangle purple_triangle"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

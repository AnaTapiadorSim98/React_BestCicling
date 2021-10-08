import React from 'react';
import logo from '../imagenes/logo-big.png';

const customData = require('../db.json');
const nombre = customData.profile.name;

const Contenedor3 = () => (
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
);


export default Contenedor3;
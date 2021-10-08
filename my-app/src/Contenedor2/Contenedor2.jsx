import React from 'react';

const customData = require('../db.json');
const nombre = customData.profile.name;

const Contenedor2 = () => (
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
);


export default Contenedor2;
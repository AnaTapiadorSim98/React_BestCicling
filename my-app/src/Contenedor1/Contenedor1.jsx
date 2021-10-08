import React from 'react';
import logo from '../imagenes/logo-big.png';
import logo2 from '../imagenes/logo_naranja.png';

const customData = require('../db.json');
const nombre = customData.profile.name;


const Contenedor1 = () => (
    <div className="contenedor">
        <img src={logo2} align="left" className="App-actual-logo2" />
        <div className="formsNombre"  >
            {nombre}
        </div>
        <div className="formsUbicacion">Valecia, Spain</div>
    </div>
);


export default Contenedor1;
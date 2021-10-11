/*import React from 'react';
import Contenedor1 from '../Contenedor1';
import Contenedor2 from '../Contenedor2';
import Contenedor3 from '../Contenedor3';
import Contenedor4 from '../Contenedor4';

export function Reproductor() {
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

export function Reproductor() {
    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Player</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

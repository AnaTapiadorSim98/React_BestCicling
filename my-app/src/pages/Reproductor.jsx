import React from "react";
import back_arrow from "../images/back_arrow.png"
import fake_video from "../images/fake_video_player.png"



export function Reproductor() {
    return (
        <div className="Player">
            <div className="player_header flow_root_container">
                <a href="/clases">
                    <img src={ back_arrow } alt="flecha de volver atrás"/>
                </a>
                <div className="lesson_title">
                    <h2>BC40 / Está en ti</h2>
                    <h4>Julio J. Jiménez</h4>
                </div>
            </div>
            <div className="player_container">
                <img src={ fake_video } className="fake_player" alt="esto es un video falso para montar la web"/>
                    <span>5</span>
            </div>
        </div>
    );
}

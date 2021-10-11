import React from "react";
import { Link, withRouter } from "react-router-dom";
import header_logo from '../images/best_cycling_logo.png';

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link id={"header_logo_link"} className="navbar-brand" to="/">
                        <img src={header_logo} alt={"header logo"}/>
                    </Link>
                    {/*
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item  ${ props.location.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item  ${ props.location.pathname === "/list" ? "active" : ""}`}>
                                <Link className="nav-link" to="/list">
                                    List
                                </Link>
                            </li>
                            <li className={`nav-item  ${ props.location.pathname === "/player" ? "active" : ""}`}>
                                <Link className="nav-link" to="/player">
                                    Player
                                </Link>
                            </li>
                        </ul>
                    </div>
                    */}
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);

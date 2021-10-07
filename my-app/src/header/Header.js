import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import logo from '../imagenes/logo-big.png';

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar className="App-actual-header">
                <img src={logo}  alt="logo" />
            </Toolbar>;
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
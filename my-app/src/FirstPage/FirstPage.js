//import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
//import logo from '../imagenes/logo-big.png';

export default function FirstPage() {
  const displayDesktop = () => {
    return <body className="App-actual-body"></body>
  };
  
  return (
    <FirstPage>
        {displayDesktop()}
    </FirstPage>
  
  );
}


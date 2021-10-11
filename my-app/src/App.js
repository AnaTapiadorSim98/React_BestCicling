import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, ListadoClases, Reproductor } from './pages';
import { AddStylesAndFunctionality, Navigation } from "./components";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <AddStylesAndFunctionality />
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/clases" exact component={() => <ListadoClases />} />
            <Route path="/clases/reproductor" exact component={() => <Reproductor />} />
          </Switch>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;

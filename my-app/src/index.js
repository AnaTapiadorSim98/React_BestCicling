import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstPage from './FirstPage';
import reportWebVitals from './reportWebVitals';

import "./index.css";
//import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
//import FirstPage from './FirstPage';
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />     
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
//export default function Login(props) {
 // props.history.push('/home')
//}

export default function Login() {
  history.push('/home')
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

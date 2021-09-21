import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
/* import App from './App';
 */import reportWebVitals from './reportWebVitals';
 import Landing from './pages/Landing/'

ReactDOM.render(
  <div className="page">
    <Landing />
    <p className="info">From latam to the world</p>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './componets/Navbar';
import * as serviceWorker from './serviceWorker';
import './App.css';
import Struct from './componets/Struct'

ReactDOM.render(
  <React.StrictMode>
    <Struct/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

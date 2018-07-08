import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';



require('../stylesheets/modules/_all.scss')


const domContainer = document.getElementById('app');

ReactDOM.render(<App />, domContainer);
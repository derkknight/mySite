import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';

require('../stylesheets/modules/_all.scss')


const domContainer = document.getElementById('app');
ReactDOM.render(<Navbar />, domContainer);
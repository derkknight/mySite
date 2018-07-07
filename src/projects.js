import React from 'react';
import ReactDOM from 'react-dom';
import ProjectCard from './Components/ProjectCard.jsx';
require('../stylesheets/modules/_all.scss')


const projects = document.getElementById('projects');

ReactDOM.render(<ProjectCard />, projects);

import 'bootstrap';
import _ from 'lodash';

const express = require('express')
const app = express()

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    return element;
}

document.body.appendChild(component());

app.set('view engine', 'ejs');

app.get('/', function (req, res)
{
    res.render('index');
});

app.get('/projects', function (req, res)
{
    res.render('projects');    
});

app.get('/github', function (req, res)
{
    res.send('Projects page');
});

app.get('/resume', function (req, res)
{
    res.send('Resume page');    
});

app.listen(3000, () => console.log('Listening on Port 3000'))
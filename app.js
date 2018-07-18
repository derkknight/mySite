//import 'bootstrap';


const express = require('express')
const app = express()
const path = require('path');


app.use(express.static(__dirname + '/dist'))

app.get('/', function (req, res)
{
    res.sendFile('index.html');
});

app.get('/projects', function (req, res)
{
    res.sendFile(path.join(__dirname, 'dist','index.html'));
});

app.get('/resume', function (req, res)
{
    res.sendFile(path.join(__dirname, "public", "files","DerickYung_Resume.pdf"));
});

app.listen(3000, () => console.log('Listening on Port 3000'))
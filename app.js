//import 'bootstrap';
const app = express()


const express = require('express')

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

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
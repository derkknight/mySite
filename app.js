//import 'bootstrap';


const express = require('express')
const app = express()


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res)
{
    res.render('index');
});



app.get('/projects', function (req, res)
{
    console.log(__dirname)
    res.sendFile(__dirname + '/dist/projects.html')

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
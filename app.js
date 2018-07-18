//import 'bootstrap';


const express = require('express')
const app = express()
const path = require('path');


app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/public/files'))
app.use(express.static(__dirname + '/public/images'))
app.use(express.static(__dirname + '/dist'))

app.get('/', function (req, res)
{
    res.sendFile('index.html');
});

app.get('/projects', function (req, res)
{
    res.sendFile(path.join(__dirname, 'dist','index.html'));
});



//GraphQL Stuff
var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }

    type Technology {
        id: ID!
        title: String!
        description: String!
    }

    type Keyword {
        id: ID!
        label: String!
    }

    type Project {
        title: String
        html: String
        link: String
        github: String
        keywords: [Keyword]
        technologies: [Technology]
    }
`);

var projects = {
    "projects":
    [
        {
            "title": "Continuous Integration Server",
            "description": "Tweetivity uses the Twitter API to scrape things.",
            "link": "www.google.com",
            "github": "www.google.com",
            "keywords": [""],
            "technologies": [""]
        },
        {
            "title": "Portfolio Website",
            "description": "Tweetivity uses the Twitter API to scrape things.",
            "link": "www.google.com",
            "github": "www.google.com",
            "keywords": [""],
            "technologies": [""]
        },
        {
            "title": "CMS",
            "description": "Tweetivity uses the Twitter API to scrape things.",
            "link": "www.google.com",
            "github": "www.google.com",
            "keywords": [""],
            "technologies": [""]
        },
        {
            "title": "Tweetivity",
            "description": "Tweetivity uses the Twitter API to scrape things.",
            "link": "www.google.com",
            "github": "www.google.com",
            "keywords": [""],
            "technologies": [""]
        }
    ]
}

var technologies = {
    "technologies":
    [
        {
            "id": 0,
            "title": "Python",
            "description": "Python was used for stuff."
        },
        {
            "id": 1,
            "title": "Pandas",
            "description": "Pandas was used for data slicing."
        },
        {
            "id": 2,
            "title": "Bootstrap",
            "description": "Bootstrap was used for styling."
        },
        {
            "id": 3,
            "title": "Flask",
            "description": "Flask was used for serving."
        },
        {
            "id": 4,
            "title": "TeamCity",
            "description": "TeamCity used for continuous integration."
        },
        {
            "id": 5,
            "title": "Docker",
            "description": "Easy CI."
        },
        {
            "id": 6,
            "title": "NodeJS",
            "description": "NodeJS was used as a web server."
        },
        {
            "id": 7,
            "title": "Sass",
            "description": "Sass was used for styling."
        },
        {
            "id": 8,
            "title": "Foundation",
            "description": "Foundation was used for styling."
        },
        {
            "id": 9,
            "title": "Redis",
            "description": "Holds information."
        },
        {
            "id": 10,
            "title": "Javascript",
            "description": "Web dev language"
        },
        {
            "id": 11,
            "title": "Webpack",
            "description": "Hot reload for prototyping."
        },
        {
            "id": 12,
            "title": "ReactJS",
            "description": "Hot reload for prototyping."
        }
    ]
}


var root = { hello: () => 'Hello world!' };


//

app.get('/resume', function (req, res)
{
    res.sendFile(path.join(__dirname, "public", "files","DerickYung_Resume.pdf"));
});

app.listen(3000, () => console.log('Listening on Port 3000'))
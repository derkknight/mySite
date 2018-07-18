import React from 'react'
import ProjectCard from './ProjectCard.jsx'



var technologies =
    [
        {
            "id": 0,
            "title": "Python",
            "image": "./public/images/Python.svg",
            "description": "High level programming language commonly used for data science and scripting."
        },
        {
            "id": 1,
            "title": "Pandas",
            "image": "./public/images/pandas.svg",
            "description": "A Python package that is used to manipulate data for data science."
        },
        {
            "id": 2,
            "title": "Bootstrap",
            "image": "./public/images/bootstrap.svg",
            "description": "Bootstrap is a CSS framework developed by Twitter for smoother website design and responsive design to mobile screen sizes."
        },
        {
            "id": 3,
            "title": "Flask",
            "image": "./public/images/flask.svg",
            "description": "A microframework in Python for website development."
        },
        {
            "id": 4,
            "title": "TeamCity",
            "image": "./public/images/teamcity.png",
            "description": "TeamCity is a Continuous Integration platform that provides automatic building of software and deployment through scripting."
        },
        {
            "id": 5,
            "title": "Docker",
            "image": "./public/images/docker.png",
            "description": "A platform that provides virtual images of specific environments for applications for streamlined production between different operating systems."
        },
        {
            "id": 6,
            "title": "NodeJS",
            "image": "./public/images/nodejs.png",
            "description": "NodeJS is a Javascript server engine that can be used for serving data and web applications."
        },
        {
            "id": 7,
            "title": "Sass",
            "image": "./public/images/sass.png",
            "description": "Sass is a style sheet language that provides variables, mixins, plugins, and compiling for smoother development."
        },
        {
            "id": 8,
            "title": "Foundation",
            "image": "./public/images/foundation.png",
            "description": "Foundation is a CSS framework developed by Zurb for designing websites and responsive design for mobile devices."
        },
        {
            "id": 9,
            "title": "D3",
            "image": "./public/images/d3.svg",
            "description": "Frontend Javascript library for displaying data such as line graphs."
        },
        {
            "id": 10,
            "title": "Javascript",
            "image": "./public/images/javascript.png",
            "description": "The programming language that the majority of websites and web applications use in order to function properly."
        },
        {
            "id": 11,
            "title": "Webpack",
            "image": "./public/images/webpack.svg",
            "description": "Module bundler that allows real-time updates and compiling to a web application for development but also bundling for deployment."
        },
        {
            "id": 12,
            "title": "ReactJS",
            "image": "./public/images/react.svg",
            "description": "Javascript library designed to provide reusable components and states for frontend and user interface work."
        }
    ]

var projects = 
[
    {
        "title": "Continuous Integration Server",
        "image": "./public/images/teamcity.jpg",
        "description": "With TeamCity, each project is set up with a hook to be notified whenever a certain branch in GitHub is pushed. Custom scripting is used to build and test the application in a Docker image. If building and testing succeed, the Docker image is deployed.",
        "link": "www.google.com",
        "github": "www.google.com",
        "keywords": ["Dev Ops", "Automation", "Deployment", "Production", "Scripting"],
        "technologies": [technologies[4], technologies[5]]
    },
    {
        "title": "Portfolio Website",
        "image": "./public/images/portfolio.jpg",
        "description": "This website was coded in ReactJS developed in the Webpack environment. The Webpack bundler allows smoother development by automatically recompiling and refreshing the website whenever a code change is saved. Sass was used to manage CSS styles using the Foundation framework by Zurb. Icons were provided by Foundation.",
        "link": "www.google.com",
        "github": "www.google.com",
        "keywords": ["Javascript", "HTML", "CSS", "Bundler", "Web Development", "Frontend"],
        "technologies": [technologies[10],technologies[7],technologies[8],technologies[12],technologies[11]]
    },
    {
        "title": "Tweetivity",
        "image": "./public/images/tweetivity.jpg",
        "description": "Tweetivity is a web app served by the Flask framework. It uses the Twitter API to access a user's followers to scrape the time of their tweets to determine what hours in the day they are the most active. To keep the data relevant, only the followers that are active within the last three weeks are taken account of. The average of how many active users there are in the given hour are then calculated and displayed in a line graph using the D3 library.",
        "link": "www.google.com",
        "github": "www.google.com",
        "keywords": ["Twitter", "Data Science", "Frontend", "Data Visualization" , "Web Application"],
        "technologies": [technologies[0],technologies[9],technologies[1],technologies[2],technologies[3]]
    }
]

var projectCards = projects.map((project) => {
    return <ProjectCard title={project.title} image={project.image} description={project.description} technologies={project.technologies} keywords={project.keywords}/>
}
);

class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render ()
    {

        return (
            <div className="grid-container fluid">
                <div className="grid-padding-y grid-x align-center">
                    <h3 className="cell large-8">Projects</h3>
                </div>
                <div className="grid-margin-y grid-x align-center">
                    {projectCards}
                </div>
            </div>
        );
    }
}
export default Projects;
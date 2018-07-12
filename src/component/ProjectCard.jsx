import React from 'react'
import Technology from './Technology.jsx';
import Keyword from './Keyword.jsx';




class ProjectCard extends React.Component
{
    render ()
    {
        var technologyCards = this.props.technologies.map((technology) => {
            return <Technology title={technology.title} description={technology.description} image={technology.image}/>
        });

        return (
            <div className="cell">
                <div className="project-card">
                    <div className="grid-x">
                        <div className="cell medium-4">
                            <img width="400px;" height="250px;" src={"./public/images/project1.jpg"} />
                        </div>
                        <div className="cell medium-8">
                            <h1>{this.props.title}</h1>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-bottom">
                    <div className="grid-x">
                        <div className="cell medium-4">
                            <p>Keywords:</p>
                            <div className="menu">
                                <Keyword />
                            </div>
                        </div>
                        <div className="cell medium-8">
                            <p>Tech Stack:</p>
                            <div className="menu">
                                {technologyCards}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectCard.defaultProps = {
    title: "Project Title",
    description: "Project description here.",
    technologies: [{"title": "Technology", "description": "."}, {"title": "Technology", "description": "."}]
}

export default ProjectCard;
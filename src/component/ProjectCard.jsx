import React from 'react'
import Technology from './Technology.jsx';
import Keyword from './Keyword.jsx';




class ProjectCard extends React.Component
{
    render ()
    {
        var keywords = this.props.keywords.map((keyword) => {
            return <Keyword label={keyword} />
        });
        
        var technologyCards = this.props.technologies.map((technology) => {
            return <Technology title={technology.title} description={technology.description} image={technology.image}/>
        });

        const paddingLeft = {
            paddingLeft: '10px'
        };

        return (
            <div className="cell large-8">
                <div className="project-card">
                    <div className="grid-x collapse">
                        <div className="cell medium-6 large-4">
                            <img width="400px;" height="250px;" src={this.props.image} />
                        </div>
                        <div className="cell medium-6 large-8">
                            <h1>{this.props.title}</h1>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project-bottom">
                    <div className="grid-x grid-margin-x" style={paddingLeft}>
                        <div className="cell medium-6 large-4">
                            <p>Keywords:</p>
                            <div className="menu">
                                {keywords}
                            </div>
                        </div>
                        <div className="cell medium-6 large-8">
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
    image: "",
    description: "Project description here.",
    technologies: [{"title": "Technology", "description": "."}, {"title": "Technology", "description": "."}],
    keywords: ["keyword", "keyword"]
}

export default ProjectCard;
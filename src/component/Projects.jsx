import React from 'react'
import ProjectCard from './ProjectCard.jsx'

class Projects extends React.Component
{
    render ()
    {
        return (
            <div className="project-container">
                <div>
                    <h3>Projects</h3>
                </div>
                <div className="grid-margin-y grid-x">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        );
    }
}
export default Projects;
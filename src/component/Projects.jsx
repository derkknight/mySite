import React from 'react'
import ProjectCard from './ProjectCard.jsx'

class Projects extends React.Component
{
    render ()
    {
        return (
            <div>
                <h1>Projects</h1>
                <p>The following is a list of projects I have done. Click for more details.</p>
                <div className="project-container grid-margin-y grid-x">
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        );
    }
}
export default Projects;
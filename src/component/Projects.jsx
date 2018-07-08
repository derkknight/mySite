import React from 'react'
import ProjectCard from './ProjectCard.jsx'

class Projects extends React.Component
{
    render ()
    {
        return (
                <div class="project-container grid-margin-y grid-x">
                    <ProjectCard />
                    <ProjectCard />
                </div>
        );
    }
}
export default Projects;
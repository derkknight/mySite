import React from 'react'
import Technology from './Technology.jsx';


class ProjectCard extends React.Component
{
    render ()
    {
        return (
            <div class="project-card medium-10 cell">
                <p>Card Title</p>
                <p>Project Description</p>
                <div>
                    <Technology />
                </div>
            </div>
        );
    }
}
export default ProjectCard;
import React from 'react'
import Technology from './Technology.jsx';


class ProjectCard extends React.Component
{
    render ()
    {
        return (
            <div className="project-card cell">
                <div className="grid-x">
                    <div className="cell medium-4">
                        <img width="400px;" height="250px;" src={"./public/images/project1.jpg"} />
                    </div>
                    <div className="cell medium-8">
                        <h3>Card Title</h3>
                        <p>
                            Tweetivity is an app that uses the Twitter API. It goes through a person's list of followers to see the activity.
                            Hello. The app was hosted via Flask through Python. The data crunching was done by Pandas.
                        </p>
                    </div>
                </div>
                <div>
                    <Technology />
                </div>
            </div>
        );
    }
}
export default ProjectCard;
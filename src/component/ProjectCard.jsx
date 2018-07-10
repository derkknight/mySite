import React from 'react'
import Technology from './Technology.jsx';
import Keyword from './Keyword.jsx';


class ProjectCard extends React.Component
{
    render ()
    {
        return (
            <div className="cell">
                <div className="project-card">
                    <div className="grid-x">
                        <div className="cell medium-4">
                            <img width="400px;" height="250px;" src={"./public/images/project1.jpg"} />
                        </div>
                        <div className="cell medium-8">
                            <h1>Card Title</h1>
                            <p>
                                Tweetivity is an app that uses the Twitter API. It goes through a person's list of followers to see the activity.
                                Hello. The app was hosted via Flask through Python. The data crunching was done by Pandas.
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
                                <Keyword />
                                <Keyword />
                                <Keyword />
                            </div>
                        </div>
                        <div className="cell medium-8">
                            <p>Tech Stack:</p>
                            <div className="menu">
                                <Technology />
                                <Technology />
                                <Technology />
                                <Technology />
                                <Technology />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProjectCard;
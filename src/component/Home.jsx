import React from 'react'
import ProfileCard from './ProfileCard.jsx'

class Projects extends React.Component
{
    render ()
    {
        return (
            <div className="home-container">
                <div className="grid-container fluid">
                    <div className="grid-x grid-margin-x">
                        <div className="cell large-4 align-center">
                            <img className="profile" width="400px;" height="250px;" src={"./public/images/project1.jpg"} />
                        </div>
                        <div className="cell large-5">
                            <ProfileCard />
                            <ProfileCard />
                            <ProfileCard />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Projects;
import React from 'react'
import ProfileCard from './ProfileCard.jsx'
import AboutMe from './ProfileContent/AboutMe.jsx'
import Contact from './ProfileContent/Contact.jsx'
import Experience from './ProfileContent/Experience.jsx'

class Projects extends React.Component
{
    render ()
    {
        return (
            <div className="home-container">
                <div className="grid-container fluid">
                    <div className="grid-x grid-margin-x grid-margin-y align-center">
                        <div className="shrink cell large-4">
                            <img className="profile" width="400px;" height="250px;" src={"./public/images/profile.jpg"} />
                        </div>
                        <div className="cell large-6">
                            <ProfileCard title={"About"} content={<AboutMe/>}/>
                            <ProfileCard title={"Experience Overview"} content={<Experience/>}/>
                            <ProfileCard title={"Contact"} content={<Contact/>}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Projects;
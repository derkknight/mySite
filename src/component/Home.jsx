import React from 'react'
import ProfileCard from './ProfileCard.jsx'
import AboutMe from './ProfileContent/AboutMe.jsx'
import Contact from './ProfileContent/Contact.jsx'
import Experience from './ProfileContent/Experience.jsx'
import Fade from 'react-reveal/Fade'

class Projects extends React.Component
{
    render ()
    {
        return (
            <div className="home-container">
                <div className="grid-container fluid">
                    <div className="grid-x grid-margin-x grid-margin-y align-center">
                        <div className="shrink cell large-4">
                            <img className="profile float-center" src={"./public/images/profile.jpg"} />
                        </div>
                        <div className="cell medium-8 large-6">
                            <ProfileCard title={"About"} content={<AboutMe/>}/>
                            <Fade bottom>
                                <ProfileCard title={"Experience Overview"} content={<Experience/>}/>
                            </Fade>
                            <ProfileCard title={"Contact"} content={<Contact/>}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Projects;
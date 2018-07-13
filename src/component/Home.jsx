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
                    <div className="grid-x grid-margin-x">
                        <div className="cell large-4 align-center">
                            <img className="profile" width="400px;" height="250px;" src={"./public/images/project1.jpg"} />
                        </div>
                        <div className="cell large-5">
                            <ProfileCard title={"About"} content={<AboutMe/>}/>
                            <ProfileCard title={"Experience"} content={<Experience/>}/>
                            <ProfileCard title={"Contact"} content={<Contact/>}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Projects;
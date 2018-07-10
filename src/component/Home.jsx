import React from 'react'

class Projects extends React.Component
{
    render ()
    {
        return (
            <div className="home-container">
                <div className="grid-container fluid">
                    <div className="grid-x grid-margin-x">
                        <div className="cell medium-4">
                            <img className="profile" width="400px;" height="250px;" src={"./public/images/project1.jpg"} />
                        </div>
                        <div className="cell medium-8">
                            <div className="profile-card">
                                <h3>About</h3>
                                <p>lmao</p>
                            </div>
                            <div className="profile-card">
                                <h3>Skills</h3>
                                <p>lmao</p>
                            </div>
                            <div className="profile-card">
                                <h3>Contact</h3>
                                <ul>
                                    <li>E-mail: 11111@1111.edu</li>
                                    <li>Phone: (111) 111-1111</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Projects;
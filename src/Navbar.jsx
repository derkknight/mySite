import React from 'react'

class Navbar extends React.Component
{
    render ()
    {
        return (
            <div className="navbar">
                <ul>
                    <li>Projects</li>
                    <li>Github</li>
                    <li>Resume</li>
                </ul>
            </div>
        );
    }
}
export default Navbar;
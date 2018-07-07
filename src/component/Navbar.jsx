import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Projects from './Projects.jsx'

class Navbar extends React.Component
{
    render ()
    {
        return (
            <Router>
                <div class="title-bar">
                    <div class="top-bar-left">
                        <ul class="menu">
                            <li><Link to={'/projects'}>Projects</Link></li>
                            <li>Github</li>
                            <li>Resume</li>
                        </ul>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Navbar;
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Projects from './Projects.jsx'

class App extends React.Component
{
    render ()
    {
        return (
            <div>
                <Router>
                <div className="navbar">
                    <ul>
                        <li><Link to={'/projects'}>Projects</Link></li>
                        <li>Github</li>
                        <li>Resume</li>
                    </ul>
                <Switch>
                    <Route path="/projects" component={Projects}/>
                </Switch>
                </div>
                
                </Router>

            </div>
        );
    }
}
export default App;
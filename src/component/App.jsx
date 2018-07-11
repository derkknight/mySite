import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Projects from './Projects.jsx'
import Home from './Home.jsx'
import $ from 'jquery';
import {foundation} from 'foundation-sites'

class App extends React.Component
{
    componentDidMount() {
        $(document).foundation();
    }

    render ()
    {
        return (
            <Router>
                <div>
                    <div className="top-bar">
                        <div className="top-bar-left">
                            <ul className="menu underline">
                                <li><Link to={'/projects'}>Projects</Link></li>
                                <li><a href="www.github.com" >Github</a></li>
                                <li><a href="">Experience</a></li>
                                <li><a href="">Resume</a></li>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                    </Switch>
                </div>   
            </Router>
        );
    }
}
export default App;
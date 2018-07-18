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
                                <li><a href="/">Derick Yung</a></li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="menu underline">
                                <li><Link to={'/projects'}>Projects</Link></li>
                                <li><a href="http://www.github.com/derkknight" >Github</a></li>
                                <li><a href="/resume">Resume</a></li>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>   
            </Router>
        );
    }
}
export default App;
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Projects from './Projects.jsx'
import $ from 'jquery';
import foundation from 'foundation-sites'

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
                    <div class="top-bar">
                        <div class="top-bar-left">
                            <ul class="menu">
                                <li><Link to={'/projects'}>Projects</Link></li>
                                <li><a href="www.github.com" >Github</a></li>
                                <li><a href="">Resume</a></li>
                            </ul>
                        </div>
                    </div>
                    <Switch>
                        <Route path="/projects" component={Projects}/>
                    </Switch>
                </div>   
            </Router>
        );
    }
}
export default App;
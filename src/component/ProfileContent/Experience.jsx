import React from 'react'
import Keyword from '../Keyword.jsx'

var technology = [
    ["AngularJS", "MySQL", ".NET Core", "Dapper", "Bootstrap", "Webpack"],
    ["C++", "C#", ".NET Framework", "Arduino","HMI"],
    ["C#", ".NET Framework", "Javascript", "D3", "AngularJS"]
]

class Experience extends React.Component
{
    render ()
    {
        var wegmans_keywords = technology[0].map((keyword) => {
            return <Keyword label={keyword} />
        });

        var lm_keywords = technology[1].map((keyword) => {
            return <Keyword label={keyword} />
        });

        var philips_keywords = technology[2].map((keyword) => {
            return <Keyword label={keyword} />
        });

        return (
                <div>
                    <ul className="experience">
                        <li>
                            <h3>Wegmans</h3>
                            <p className="position-title">
                                Developer Co-op
                                <span className="job-time" >May - August 2017</span>
                            </p>
                            <div className="menu">
                                {wegmans_keywords}
                            </div>
                        </li>
                        <br/>
                        <li>
                            <h3>Lockheed Martin</h3>
                            <p className="position-title">
                                Technical Co-op
                                <span className="job-time" >February - July 2016</span>
                            </p>
                            <div className="menu">
                                {lm_keywords}
                            </div>
                        </li>
                        <br/>
                        <li>
                            <h3>Philips</h3>
                            <p className="position-title">
                                Developer Co-op
                                <span className="job-time" >January - August 2015</span>
                            </p>
                            <div className="menu">
                                {philips_keywords}
                            </div>
                        </li>
                    </ul>
                    <br/>
                    <p>For more information, please take a look at my <a href="">resume</a>.</p>
                </div>
        );
    }
}


export default Experience;
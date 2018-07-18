import React from 'react'

class Contact extends React.Component
{
    render ()
    {
        return (
                <div className="grid-x">
                    <div className="cell large-4">
                        <ul className="experience">
                            <li><h3>Programming Languages</h3></li>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Ruby</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>Swift</li>
                        </ul>
                    </div>
                    <div className="cell large-4">
                        <ul className="experience">
                            <li><h3>Web Frameworks</h3></li>
                            <li>ASP.NET</li>
                            <li>Django</li>
                            <li>Ruby on Rails</li>
                            <li>Flask</li>
                            <li>Nodejs</li>
                            <li>AngularJS</li>
                            <li>ReactJS</li>
                        </ul>
                    </div>
                    <div className="cell large-4">
                        <ul className="experience">
                            <li><h3>Libraries</h3></li>
                            <li>Android Development</li>
                            <li>Bootstrap</li>
                            <li>Foundation</li>
                            <li>Sass</li>
                            <li>D3</li>
                            <li>JQuery</li>
                            <li>Less CSS</li>
                        </ul>
                    </div>
                </div>
        );
    }
}


export default Contact;
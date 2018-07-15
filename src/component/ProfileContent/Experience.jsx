import React from 'react'

class Experience extends React.Component
{
    render ()
    {
        return (
                <div>
                    <ul className="experience">
                        <li>
                            <h3>Wegmans</h3>
                            <p className="position-title">Developer Co-op</p>
                            <p>Created a web application to manage the organic farm's inventory and keep track of crop planting progress on the field.</p>
                        </li>
                        <li>
                            <h3>Lockheed Martin</h3>
                            <p className="position-title">Technical Co-op</p>
                            <p>Research and development of an embedded system control panel to communicate with an aircraft over a network.</p>
                        </li>
                        <li>
                            <h3>Philips</h3>
                            <p className="position-title">Developer Co-op</p>
                            <p>Stress tested the servers of the nurse rounds mobile application by sending thousands of messages from a program.</p>
                        </li>
                    </ul>
                    <p>For more or detailed information, please navigate over to the Experience page.</p>
                </div>
        );
    }
}


export default Experience;
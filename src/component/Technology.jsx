import React from 'react'

class Technology extends React.Component
{
    render ()
    {

        return (
            <div>
                <img className="tech-img" height={"50"} width={"50"} src={"./public/images/python-powered-h.svg"}/>
                <div id="technology-tip-container" className="technology-tip-container">
                    <div className="technology-arrow"/>
                    <div className="technology-tip-info">
                        <div className="technology-tip-heading">
                            <img height={"20"} width={"20"} src={"./public/images/python-powered-h.svg"}/>
                            <p>Python</p>
                        </div>
                        <p>Python was used to crunch through numbers of the data feeds through.</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default Technology;
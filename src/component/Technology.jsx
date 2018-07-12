import React from 'react'

class Technology extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render ()
    {
        return (
            <div className="technology">
                <img className="tech-img" height={"50"} width={"50"} src={this.props.image}/>
                <div id="technology-tip-container" className="technology-tip-container">
                    <div className="technology-arrow"/>
                    <div className="technology-tip-info">
                        <div className="technology-tip-heading">
                            <img height={"20"} width={"20"} src={this.props.image}/>
                            <p>{this.props.title}</p>
                        </div>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>

        );
    }
}

Technology.defaultProps = {
    title: "Technology Title",
    description: "Technology description to describe the generic use case of it.",
    image: "./public/images/Python.svg"
}

export default Technology;
import React from 'react'

class Keyword extends React.Component
{
    render ()
    {
        return (
            <div className="technology">
                <button className="button small hollow keyword">{this.props.label}</button>
            </div>

        );
    }
}

Keyword.defaultProps = {
    label: "Keyword"
}

export default Keyword;
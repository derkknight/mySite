import React from 'react'

class Technology extends React.Component
{
    constructor(props) {
        super(props);
        this.onmousehover = this.onmousehover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    onmousehover() {
        this.setState(this.toggleHover);
    }

    toggleHover(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render ()
    {

        return (
            <div>
                <img height={"50"} width={"50"} src={"./public/images/python-powered-h.svg"}
                                onMouseEnter={this.onmousehover}
                                onMouseLeave={this.onmousehover}>
                                </img>
            {
                this.state.isHovering &&
                <div class="technology-tip-container">
                    <div class="technology-arrow"/>
                    <div class="technology-tip-info">
                        Python was used to crunch through numbers of the data feeds through.
                    </div>
                </div>
            }
            </div>

        );
    }
}
export default Technology;
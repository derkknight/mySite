import React from 'react'

class ProfileCard extends React.Component
{
    render ()
    {
        return (
                <div className="cell grid-container">
                    <div className="grid-x">
                        <div className="cell large-3">
                            <h1>{this.props.title}</h1>
                        </div>
                        <div className="cell large-9">
                            <div className="profile-top">
                                <h1>{this.props.title}</h1>
                            </div>
                            <div className="profile-card">
                                <p>
                                    {this.props.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

ProfileCard.defaultProps = {
    title: "Profile Title",
    content: "Profile description."
}

export default ProfileCard;
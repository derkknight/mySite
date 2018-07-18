import React from 'react'

class ProfileCard extends React.Component
{
    render ()
    {
        return (
                <div className="cell">
                    <div className="grid-container">
                        <div></div>
                        <div>
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
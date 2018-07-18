import React from 'react'
import Fade from 'react-reveal/Fade'

class AboutMe extends React.Component
{
    render ()
    {
        return (
                <div>
                    <p>
                        My name is Derick Yung. I am a Software Engineer that specializes in full-stack development.
                        I graduated from Rochester Institute of Technology with a BS in Software Engineering and MS in Media, Arts, and Technology.
                        I have worked in various companies such as Wegmans, Lockheed Martin, and Philips.
                    </p>
                    <br/>
                    <p>
                        For more information on my works, check out my <a href="/projects">projects!</a>
                    </p>
                </div>
        );
    }
}


export default AboutMe;
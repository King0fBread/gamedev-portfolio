import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const About = () => {

    let navigate = useNavigate();

    const navigateTo = () => {
        navigate('/projects')
        console.log('a');
    }


    return (
        <div className="container" id="aboutMe">
            <div className="centered-content-description-aboutme">
                    Hey, I’m Nikita, a self-taught programmer and game developer!
                    <br></br>
                    I have been actively creating projects for more than a year,
                    <br/>
                    while continuously improving and learning new skills to expand my capabilities.
                    <p></p>
                    I consider myself highly passionate about the art of making games,
                    <br/>
                    love thinking outside the box and try my best to write clean maintainable code.
                    <br/>
                    So I would certainly enjoy working alongside other dedicated developers.
                    <p></p>
                    Furthermore, I’m quite outgoing and love meeting new people from the industry.
                    <br/>
                    I’m also fluent in English and Russian, as well as currently learning Korean.
                    <p>
                        Thanks for reading :D
                        <br/>
                        You can also check out my
                        <span onClick={navigateTo} className="hypertextElement"> projects </span>
                        on the other page, or
                        <span onClick={() => {navigate('/contacts')}
                        } className="hypertextElement"> contact </span>
                        me if you wish!
                    </p>
                    <img className='aboutme-collage' src='/AboutMeCollageUNFINISHED.png'></img>
                    <p></p>
            </div>
        </div>
    );
};

export default About;
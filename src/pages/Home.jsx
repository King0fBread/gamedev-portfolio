import React from 'react';
import logoFirst from '../images/logo-first.png';
import iconArrow from '../images/iconArrow.png'
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="container" id="home">
            <div className="centered-content-title">
                Nikita Glubokov’s
                <br/>
                    Game Developer Portfolio
                    <br/>
                <img className="logo-image" src={logoFirst}></img>
                <img onClick={() => navigate('/about')} className="arrow-icon" src={iconArrow}></img>
            </div>
        </div>
    );
};

export default Home;
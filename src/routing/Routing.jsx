import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Contacts from "../pages/Contacts.jsx";
import GamePage from '../pages/GamePage.jsx';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path='/gamePage/:id' element={<GamePage></GamePage>}></Route>
        </Routes>
    );
};

export default Routing;
import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = ({active, setActive}) => {



    return (
        <header className="header">
            <nav className="navigation">
                <ul className="menu-buttons" id="menu-buttons">
                    <li>
                        <NavLink onClick={() => setActive(true)} className={active ? "every__link  active" : "every__link"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActive(false)} className="every__link" to="/about">About me</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setActive(false)} className="every__link" to="/projects">Projects</NavLink>
                    </li>
                    <li>
                       <NavLink onClick={() => setActive(false)} className="every__link" to="/contacts">Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
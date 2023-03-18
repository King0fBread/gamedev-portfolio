import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="menu-buttons" id="menu-buttons">
                    <li>
                        <Link className="every__link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="every__link" to="/about">About me</Link>
                    </li>
                    <li>
                        <Link className="every__link" to="/projects">Projects</Link>
                    </li>
                    <li>
                       <Link className="every__link" to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
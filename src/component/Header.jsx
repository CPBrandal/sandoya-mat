import React from 'react';
import '../styles/Header.css';


function Header () {
    return (
        <header className="header">
            <div className="logo">
                <img src="path/to/logo.png" alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#sandoya-mat">Sandøya mat</a></li>
                    <li><a href="#liv-pa-brygga">Liv på brygga</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
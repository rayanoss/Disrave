import React from 'react';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <p className='navbar_title'>Disrave</p>
            <ul className='navbar_links'>
                <li className='link'><a href="#id">Accueil</a></li>
                <li className='link'><a href="#id">Prochain film</a></li>
                <li className='link'><a href="#id">Liste des films</a></li>
                <li className='link'><a href="#id">Proposition</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
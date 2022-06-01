import React from 'react';
import BlueBtn from './BlueBtn';

const NavBar = () => {
    return (
        <nav className='navbar color'>
            <p className='navbar_title'>Disrave</p>
            <ul className='navbar_links'>
                <li className='link'><a href="#id">Accueil</a></li>
                <li className='link'><a href="#id">Prochain film</a></li>
                <li className='link'><a href="#id">Liste des films</a></li>
                <li className='link'><a href="#id">Proposition</a></li>
            </ul>
            <BlueBtn content={"Connexion"}/>
        </nav>
    );
};

export default NavBar;
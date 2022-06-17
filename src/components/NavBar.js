import React, {useContext, useState, useRef} from 'react';
import { AuthContext } from '../context/AuthContext';
import BlueBtn from './BlueBtn';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const NavBar = ({body}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {currentUser} = useContext(AuthContext)
    const hamburger = useRef(null)
    return (
        <>
        <nav className='navbar'>
            <p className='navbar_title'>Disrave</p>
            <ul className='navbar_links'>
                <li className='link'><a href="/">Accueil</a></li>
                <li className='link'><a href="/prochain-film">Prochain film</a></li>
                <li className='link'><a href="/liste-films">Liste des films</a></li>
            </ul>
            {currentUser ? <BlueBtn content={"Déconnexion"}/> : <BlueBtn content={"Connexion"}/>}
        </nav>

          <nav className='hamburger-navbar'>
            <div className="top-navbar">
            {(isOpen) ? <AiOutlineClose 
            onClick={() => {
                setIsOpen(false)
                hamburger.current.style.transform = 'translateX(-100%)'
                body.current.className = ""
                }}/> : <AiOutlineMenu onClick={() => {
                    setIsOpen(true)
                    hamburger.current.style.transform = 'translateX(0%)'
                    body.current.className = "noscroll"
                    }}/> }
            <p className='navbar_title'>Disrave</p>
            </div>
           
            <ul className='navbar_links' ref={hamburger}>
               
                <li className='link'><a href="/">Accueil</a></li>
                <li className='link'><a href="/prochain-film">Prochain film</a></li>
                <li className='link'><a href="/liste-films">Liste des films</a></li>
                {currentUser ? <BlueBtn content={"Déconnexion"}/> : <BlueBtn content={"Connexion"}/>}
            </ul>
           
        </nav>
    </>
    );
};

export default NavBar;
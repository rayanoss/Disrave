import React from 'react';
import BlueBtn from './BlueBtn'
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className="top-container-footer">
                <div className="newsletter">
                    <h3>Ne loupe aucun film</h3>
                    <div className="input">
                    <input type="email" name="email" id="email" placeholder='Adresse email' />
                    <BlueBtn content={"S'inscrire"}/>
                    </div>
                </div>

                <div className="liens-utiles">
                    <h3>Liens utiles</h3>
                    <ul>
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Prochain film</a></li>
                        <li><a href="">Liste des films</a></li>
                    </ul>
                </div>

                <div className="informations">
                    <h3>Informations</h3>
                    <ul>
                        <li><a href="">Mention légal</a></li>
                        <li><a href="">Politique de confidentialité</a></li>
                        <li><a href="">CGV</a></li>
                    </ul>
                </div>
            </div>
            <div className="under-footer">
                <h3>Disrave</h3>
                <div className="link-social">
                    <AiFillFacebook/>
                    <AiFillTwitterSquare/>
                    <FaDiscord/>
                </div>
            </div>
        </section>
    );
};

export default Footer;
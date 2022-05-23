import React from 'react';
import bgHeader from "../../asset/wolf-street-header.jpg";
import BlueBtn from '../BlueBtn';
import WhiteBtn from '../WhiteBtn';

const Hero = () => {
    return (
        <div className='hero_container'>
            <img src={bgHeader} alt="" className='bg_header_hero'/>

            <div className='hero_text_btn'>
                <h1 className='hero_title'>DISRAVE</h1>
                <p className='hero_p'>Ta salle de cinéma depuis Discord</p>
                <div className="btn_hero_container">
                <BlueBtn content="S'inscrire"/>
                <WhiteBtn content="Liste des films"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
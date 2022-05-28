import React from 'react';
import BlueBtn from '../BlueBtn';
import WhiteBtn from '../WhiteBtn';
import imgHeader from '../../asset/mia-wallace.png';
const Hero = () => {
    return (
        <div className='hero_container'>
            <div className='text_btn_container'>
                <div className="buble-bg"></div>
                <h1>TON CINEMA DEPUIS <span style={{color: "#5865F2"}}>DISCORD</span></h1> 
                <p>Retrouve tes films préférés tous les samedis soirs dans le channel film</p>
                <div className="btn_hero_container">
                <BlueBtn content="S'inscrire"/>
                <WhiteBtn content="Liste des films"/>
                </div>
            </div>
            <div className='right-side-container'>
                <img src={imgHeader} alt="" />
                <div className="buble-bg"></div>
            </div>
        </div>
    );
};

export default Hero;
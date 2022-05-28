import React, { useState, useRef, useEffect } from 'react';
import iphoneFeatures from "../../asset/iphone-features.png";
import {FaHashtag} from 'react-icons/fa';

const Features = () => {
    const [index, setIndex] = useState(0); 
    
    useEffect(() => {
        handleClickFeatures(index)
    }, [])
    const featuresDiv = useRef()
    const features = [{
        title: 'Un moment convivial', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.'
    }, 
    {
        title: 'Un moment', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.'
    }, 
    {
        title: 'moment convivial', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.'
    }]
     
    const handleClickFeatures = (i) => {
        setIndex(i)
        Array.from(featuresDiv.current.children).forEach((feature, index) => {
            if(index === i){
                feature.className = "feature-title active"
            }else{
                feature.className = "feature-title"
            }
        });
    }
    return (
        <section className='features_section'>
             <div className="background-section">
                <div className="features-container">

                    <div className="feature-iphone-title">
                        <img src={iphoneFeatures} alt="" />
                        <div className="features-title" ref={featuresDiv}>
                            <p className='feature-title' onClick={() => handleClickFeatures(0)}><FaHashtag /> moment-convivial</p>
                            <p className='feature-title' onClick={() => handleClickFeatures(1) }><FaHashtag /> liste-à-craquer</p>
                            <p className='feature-title' onClick={() => handleClickFeatures(2) }><FaHashtag /> tous-les-samedi</p>
                        </div>
                    </div>
                   
                    <div className='feature-desc'>
                        <h3>{features[index].title}</h3>
                        <p>{features[index].desc}</p>
                    </div>
                </div>   
           </div>
        </section>
    );
};

export default Features;
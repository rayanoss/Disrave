import React, { useState, useRef, useEffect} from 'react';
import iphoneFeatures from "../../asset/iphone-features.png";
import ipadFeatures from "../../asset/ipad-features.png";
import {FaHashtag} from 'react-icons/fa';

const Features = () => {
    const [index, setIndex] = useState(0); 
    const [stop, setStop] = useState(false);
    let animationIndex = 0; 

    useEffect(() => {
        handleClickFeatures(index)
        const interval = setInterval(() => {
            animationIndex++; 
            if(animationIndex > 2){
                animationIndex = 0; 
            }
            handleClickFeatures(animationIndex); 
        }, 2000)
        if(stop) return clearInterval(interval)
        return () => clearInterval(interval)
    }, [stop])

    const featuresDiv = useRef()
    const featureDetails = useRef()
    const features = [{
        title: 'Un moment convivial', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.', 
        className: 'convivial'
    }, 
    {
        title: 'Un moment', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.', 
        className: 'liste'
    }, 
    {
        title: 'moment convivial', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.', 
        className: 'samedi'
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
             <div className='section-header'>
                    <h3 className='title'>La soirée qu'il ne faut pas louper</h3>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.</p>
                </div>
             <div className="background-section">
                <div className="features-container">

                    <div className="feature-iphone-title">
                        <img src={iphoneFeatures} alt="" className='iphone-features'/>
                        <img src={ipadFeatures} alt="" className='ipad-features'/>
                        <div className="features-title" ref={featuresDiv}>
                            <p className='feature-title' onClick={() => {
                            handleClickFeatures(0)
                            setStop(true)}}><FaHashtag /> moment-convivial</p>
                            <p className='feature-title' onClick={() => {
                            handleClickFeatures(1)
                            setStop(true)}}><FaHashtag /> liste-à-craquer</p>
                            <p className='feature-title' onClick={() => {
                            handleClickFeatures(2)
                            setStop(true)}}><FaHashtag /> tous-les-samedi</p>
                        </div>
                    </div>
                   
                    {features.map((feature, key) => {
                        if(key === index) return (
                            <div key={key} className={"feature-desc " + features[index].className} ref={featureDetails} >
                                <h3>{features[index].title}</h3>
                                <p>{features[index].desc}</p>
                            </div>
                        )
                        else return null
                    })}
                </div>   
           </div>
        </section>
    );
};

export default Features;
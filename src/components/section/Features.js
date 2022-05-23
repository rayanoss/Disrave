import React from 'react';
import macImg from "../../asset/section_mac.png";
const Features = () => {
    return (
        <section className='features_section'>
            <div className='features_container'>
            <div className='features'>
                <h3 className='features_title'>Un moment convivial</h3>
                <p className='features_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.</p>
            </div>

            <div className='features_with_img'>
            <div className='features'>
                <h3 className='features_title'>Un moment convivial</h3>
                <p className='features_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.</p>
            </div>
            <img src={macImg} alt="" />
            </div>
           
            <div className='features'>
                <h3 className='features_title'>Un moment convivial</h3>
                <p className='features_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.</p>
            </div>
            </div>
        </section>
    );
};

export default Features;
import React from 'react';
import {BiMessageAdd} from 'react-icons/bi';
import {MdOutlineWhereToVote} from 'react-icons/md';
import {AiOutlinePlayCircle, AiOutlineStar} from 'react-icons/ai';

const Step = () => {
    return (
        <section className='step_section'>
             <div className='section-header'>
                    <h3 className='title'>En toute simplicité</h3>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi mauris, porta id congue vitae, rhoncus vitae odio.</p>
                </div>
            <ul className='step_container'>
                <div className='step_left_panel'>
                <li className='item'>
                    <h3><span className='item-index'>1.</span> Poster</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <BiMessageAdd />
                </li>
                <li className='item'>
                    <h3><span className='item-index'>3.</span> Regarder</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <AiOutlinePlayCircle />
                </li>
                </div>
            
                <div className='step_right_panel'>
                <li className='item'>
                    <h3><span className='item-index'>2.</span> Voter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   
                    <MdOutlineWhereToVote />
                </li>
                <li className='item'>
                    <h3><span className='item-index'>4.</span> Noter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <AiOutlineStar />
                </li>
                </div>
            </ul>
        </section>
    );
};

export default Step;
import React from 'react';
import {BiTimeFive} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai'; 
import {FaDiscord} from 'react-icons/fa'; 

const MovieKey = ({movie, review}) => {

    function convertTime(minutes){
        const h = Math.floor(minutes/60);
        const m = minutes%60; 
        return (h + 'h ' + m + 'min').toString()
    }

    function getAverage(){
        if (review.length !== 0){
            let total = 0; 
            let noteArray = []
            review.forEach(rev => noteArray.push(rev.note))
            noteArray.forEach(note => total += parseInt(note))
            return total / noteArray.length
        }
       else {
           return 0
       }
    }

    return (
        <>
            <div className='movie-key-banner'>
                <div className='item'>
                    <BiTimeFive />
                    <p className='title'>Durée</p>
                    <p className='runtime-value'>{convertTime(movie.runtime)}</p>
                </div>
                <div className='item'>
                    <AiFillStar />
                    <p className='title'>Avis public</p>
                    <p className='public-value'>{movie.vote_average}/10</p>
                </div>
                <div className='item'>
                    <FaDiscord />
                    <p className='title'>Avis Disrave</p>
                    <p className='disrave-value'>{getAverage()}/10</p>
                </div>
            </div> 
        </>
    );
};

export default MovieKey;
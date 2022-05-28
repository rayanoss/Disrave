import React from 'react';

const Informations = ({movie}) => {
    console.log(movie)
    return (
        <div className='movie-info'>
            <img src={movie.poster} alt="" />
            <div className="info-text">
                <p style={{fontWeight: "bold", fontSize: "20px"}}>{movie.title}</p>
                <p className='vote-average'>{movie.vote_average} - 10</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
};

export default Informations;
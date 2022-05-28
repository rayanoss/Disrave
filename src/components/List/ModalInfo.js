import React from 'react';

const ModalInfo = ({movie}) => {
    console.log(movie)
    return (
        <div className='modal-container'>
            <div className="movie-info">
                <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt="" />
                <div className="text">
                    <p style={{fontWeight: "bold", fontSize: "20px"}}>{movie.title}</p>
                    <p className='vote-average'>{movie.vote_average} - 10</p>
                    <p style={{fontSize: "13px"}}>{movie.overview.slice(0, 500)}...</p>
                </div>
            </div>
        </div>
    );
};

export default ModalInfo;
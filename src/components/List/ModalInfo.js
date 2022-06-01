import React, {useEffect, useState} from 'react';
import axios from 'axios';
const ModalInfo = ({movie}) => {
    const [movieGenres, setMovieGenres] = useState([]);
    console.log(movieGenres)
    useEffect(() => {
        const fetchDataMovie = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&append_to_response=videos`);
            setMovieGenres(res.data.genres); 
        } 
        fetchDataMovie();
    }, [])
    return (
        <div className='modal-container'>
            <div className="movie-info">
                <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt="" />
                <div className="text">
                    <p className='movie-title'>{movie.title}</p>
                    <ul className="list-genres">
                    {(movieGenres) ? movieGenres.map(genre => (
                        <li className="genre-item" key={genre.id}>{genre.name}</li>
                    )) : null}
                    </ul>
                    <p style={{fontSize: "13px"}}>{movie.overview.slice(0, 500)}...</p>
                </div>
            </div>
        </div>
    );
};

export default ModalInfo;
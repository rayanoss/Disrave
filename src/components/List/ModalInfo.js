import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
const ModalInfo = ({movie}) => {
    const [movieGenres, setMovieGenres] = useState([]);
    const [key, setKey] = useState(null)
    const url = "https://www.youtube.com/watch?v=" + key;
    
    useEffect(() => {
        const fetchDataMovie = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&append_to_response=videos`);
            setMovieGenres(res.data.genres); 
        } 

        const fetchTrailerMovie = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR`);
            setKey(res.data.results[res.data.results.length - 1].key)
           
        } 

        fetchDataMovie();
        fetchTrailerMovie();
    }, [])
    return (
        <div className='modal-container'>
            <div className="movie-info">
            <ReactPlayer url={url} controls={true} width={'100%'} height={'500px'}/>
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
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ModalInfo from './ModalInfo';
import {AiFillStar} from 'react-icons/ai';
import {CgMoreO} from 'react-icons/cg';
const List = () => {
    
    const [listMovies, setListMovies] = useState([]); 
    const [movieInfo, setMovieInfo] = useState(false);
    const [movieId, setMovieId] = useState(null)
    useEffect(() => {
        const fetchListMovies = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/account/1/watchlist/movies?sort_by=created_at.desc&api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&session_id=4b4b981f7963e0b723f8d8f7350c2661e1727eed ")
            setListMovies(res.data.results)
        }  
        fetchListMovies()
    }, [])

    const handleClickMovieInfo = (id) => {
        setMovieId(id)
        setMovieInfo(true)
    }
    return (
        <section className='list-movies-section'>
            {movieInfo ? <ModalInfo movie={listMovies[movieId]} /> : null}
            <ul className='list-movies'>
                {listMovies.map((movie, index) => 
                    <li key={movie.id} className="movie-item" onClick={() => handleClickMovieInfo(index)}>   
                        <div className="image-container">
                        <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt="" />
                        <p className='movie-vote-average'><AiFillStar/> {movie.vote_average}</p>
                        <CgMoreO />
                        </div>
                        <p>{movie.original_title}</p>
                    </li>    
                )}
            </ul>
        </section>
    );
};

export default List;
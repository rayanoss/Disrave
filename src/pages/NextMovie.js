import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Informations from '../components/NextMovie/Informations';
import Trailer from '../components/NextMovie/Trailer';

const NextMovie = () => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const fetchDataMovie = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/movie/49026?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&append_to_response=videos");
            const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + res.data.poster_path;
            const trailer = res.data.videos.results[res.data.videos.results.length - 1];
            const data = res.data
            setMovie({...data, poster, trailer});
        } 
        fetchDataMovie();
    }, [])
    return (
        <section className='next-movie-section'>
            <h1 className='title-section'>PROCHAIN FILM</h1>
            <Informations movie={movie}/>
            <Trailer movie={movie}/>
        </section>
    );
};

export default NextMovie;
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Informations from '../components/NextMovie/Informations';
import Trailer from '../components/NextMovie/Trailer';

const NextMovie = () => {
    const [movie, setMovie] = useState({})
    const [watchTrailer, setWatchTrailer] = useState(false)
    console.log(watchTrailer)
    useEffect(() => {
        const fetchDataMovie = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/movie/49026?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&append_to_response=videos");
            const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + res.data.poster_path;
            const backgroundPoster = "https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces" + res.data.backdrop_path;
            const trailer = res.data.videos.results[res.data.videos.results.length - 1];
            const data = res.data
            setMovie({...data, poster, trailer, backgroundPoster});
        } 
        fetchDataMovie();
    }, [])
    return (
        <section className='next-movie-section'>
            <img src={movie.backgroundPoster} alt="" className='section-background'/>
            <Informations movie={movie} setWatchTrailer={setWatchTrailer} watchTrailer={watchTrailer}/>
            {(watchTrailer) ? <Trailer setWatchTrailer={setWatchTrailer}/> : null}
        </section>
    );
};

export default NextMovie;
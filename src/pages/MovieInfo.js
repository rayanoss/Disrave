import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
    const [movie, setMovie] = useState({})
    const [url, setUrl] = useState("")
    const params = useParams(); 
    const movieId = params.id; 
   
    useEffect(() => {
        const fetchDataMovie = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&append_to_response=videos`);
            const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + res.data.poster_path;
            const backgroundPoster = "https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces" + res.data.backdrop_path;
            const trailer = res.data.videos.results[res.data.videos.results.length - 1];
            const data = res.data
            setMovie({...data, poster, trailer, backgroundPoster});
           
        } 

        const fetchTrailer = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR`);
            setUrl("https://www.youtube.com/watch?v=" + res.data.results[res.data.results.length - 1].key)
        } 

        fetchDataMovie();
        fetchTrailer();
    }, [])

    console.log(movie)
    return (
        <section className="section-movie-info">
            <div className="top-container">
            <img src={movie.backgroundPoster} alt="" className='background-poster'/>
                <div className="information-container">
                    <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt=""/>
                    <div className="text-container">
                        <p className='movie-title'>{movie.title}</p>
                        <ul className="list-genres">
                        {(movie.genres) ? movie.genres.map(genre => (
                            <li className="genre-item" key={genre.id}>{genre.name}</li>
                        )) : null}
                        </ul>
                        {movie.overview ? <p style={{fontSize: "14px"}}>{movie.overview}</p> : null}
                    </div>     
                </div>   
            </div>
            <ReactPlayer url={url} controls={true} width={'50%'} height={'50%'}/>
        </section>
    );
};

export default MovieInfo;
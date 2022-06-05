import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import {BiTimeFive} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai'; 
import {FaDiscord} from 'react-icons/fa'; 

const review = [{
    name: 'rayane', 
    review: 'lorem ipsum lalilalalao prout'
},
{
    name: 'rayane', 
    review: 'lorem ipsum lalilalalao prout'
},
{
    name: 'rayane', 
    review: 'lorem ipsum lalilalalao prout'
}, 
{
    name: 'rayane', 
    review: 'lorem ipsum lalilalalao prout'
}]

const MovieInfo = () => {
    const [movie, setMovie] = useState({})
    const [url, setUrl] = useState("")
    const params = useParams(); 
    const movieId = params.id; 
   
    function convertTime(minutes){
        const h = Math.floor(minutes/60);
        const m = minutes%60; 
        return (h + 'h ' + m + 'min').toString()
    }
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
                    <p className='disrave-value'>?/10</p>
                </div>
            </div>

            <div className='movie-trailer-container'>
            <h3>Trailer</h3>
            <ReactPlayer url={url} controls={true} width={'100%'} height={'500px'}/>
            </div>
           
           <div className='review-container'>
               <ul>
                   {review.map((rev, index) => (
                       <li key={index}>
                           <p>{rev.name}</p>
                           <p>{rev.review}</p>
                       </li>
                   ))}
               </ul>
           </div>
        </section>
    );
};

export default MovieInfo;
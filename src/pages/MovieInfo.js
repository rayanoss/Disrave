import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import ReviewModal from '../components/MovieInfo/ReviewModal';
import HeaderMovie from '../components/MovieInfo/HeaderMovie';
import MovieReview from '../components/MovieInfo/MovieReview';
import MovieKey from '../components/MovieInfo/MovieKey';
import { db } from '../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";


const MovieInfo = () => {
    const [movie, setMovie] = useState({})
    const [url, setUrl] = useState("")
    const [postReview, setPostReview] = useState(false)
    const [review, setReview] = useState([]); 
    const params = useParams(); 
    const movieId = params.id; 
    
    const q = query(collection(db, "review"), where("id", "==", movieId));
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

        const fetchReview = async () => {
            let result = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            let data = doc.data(); 
            data.docId = doc.id; 
            result.push(data)
            });
            setReview(result)
        }
        fetchReview()
        fetchDataMovie();
        fetchTrailer();
    }, [])

    return (
        <section className="section-movie-info">
            {postReview ? <ReviewModal setPostReview={setPostReview} movieId={movieId}/> : null}
            <HeaderMovie movie={movie} movieId={movieId}/>
            <MovieKey movie={movie} review={review}/>
            <div className='movie-trailer-container'>
            <h3>Trailer</h3>
            <ReactPlayer url={url} controls={true} width={'100%'} height={'100%'}/>
            </div>
            
            <MovieReview setPostReview={setPostReview} review={review} movieId={movieId}/>
        </section>
    );
};

export default MovieInfo;
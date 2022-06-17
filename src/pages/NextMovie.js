import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Informations from '../components/NextMovie/Informations';
import Trailer from '../components/NextMovie/Trailer';
import ReactPlayer from 'react-player';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext'
import InformationsModal from '../components/NextMovie/InformationsModal';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../firebase';
const NextMovie = () => {
    const [movie, setMovie] = useState({})
    const [watchTrailer, setWatchTrailer] = useState(false)
    const [url, setUrl] = useState("")
    const [nextMovie, setNextMovie] = useState(false)
    const [downloadLink, setDownloadLink] = useState(null)
    const [currentMovieId, setMovieId] = useState(null)
    const {currentUser} = useContext(AuthContext)
    
    useEffect(() => {
        const fetchDataMovie = async () => {
            const docRef = doc(db, "nextMovie", "0");
            const docSnap = await getDoc(docRef);
            setMovieId(docSnap.data().movieId)
            setDownloadLink(docSnap.data().downloadLink)
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${docSnap.data().movieId}?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&append_to_response=videos`);
            const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + res.data.poster_path;
            const backgroundPoster = "https://image.tmdb.org/t/p/w1920_and_h1080_multi_faces" + res.data.backdrop_path;
            const trailer = res.data.videos.results[res.data.videos.results.length - 1];
            const data = res.data
            setMovie({...data, poster, trailer, backgroundPoster});
           
        } 

        const fetchTrailer = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/movie/49026/videos?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR");
            setUrl("https://www.youtube.com/watch?v=" + res.data.results[res.data.results.length - 1].key)
        } 

        fetchDataMovie();
        fetchTrailer();
    }, [])

    return (
        <section className='next-movie-section' style={{overflow: "hidden"}}>
            <ReactPlayer url={url} playing={true} loop={true} muted={true} controls={false} width={'600%'} height={'110%'} className="react-player"/>
            <Informations movie={movie} setWatchTrailer={setWatchTrailer} currentUser={currentUser} setNextMovie={setNextMovie}/>
            {(watchTrailer) ? <Trailer setWatchTrailer={setWatchTrailer} url={url}/> : null}
            {(nextMovie) ? <InformationsModal setNextMovie={setNextMovie} currentMovieId={currentMovieId}/> : null}
        </section>
    );
};

export default NextMovie;
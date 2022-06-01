import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Trailer = ({setWatchTrailer}) => {
    const [key, setKey] = useState(null)
    const url = "https://www.youtube.com/watch?v=" + key;
    
    useEffect(() => {
        const fetchDataMovie = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/movie/49026/videos?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR");
            setKey(res.data.results[res.data.results.length - 1].key)
           
        } 
        fetchDataMovie();
    }, [])
    return (
        <div className='trailer-container' onClick={() => setWatchTrailer(false)}>
            <ReactPlayer url={url} controls={true} width={'60%'} height={'60%'}/>
        </div>
    );
};

export default Trailer;
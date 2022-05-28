import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Trailer = ({movie}) => {
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
        <div className='trailer-section' style={{width: '100%', marginTop: '50px'}}>
            <h3 className='trailer-section-title'>TRAILER</h3>
            <ReactPlayer url={url} controls={true} width={'100%'} height={'600px'}/>
            <button className='btn-download-movie'>Télécharger le film</button>
        </div>
    );
};

export default Trailer;
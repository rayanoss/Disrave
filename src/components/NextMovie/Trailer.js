import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const Trailer = ({setWatchTrailer, url}) => {
    return (
        <div className='trailer-container' onClick={() => setWatchTrailer(false)}>
            <ReactPlayer url={url} controls={true} width={'60%'} height={'60%'}/>
        </div>
    );
};

export default Trailer;
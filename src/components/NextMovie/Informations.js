import React from 'react';
import WhiteBtn from "../WhiteBtn"; 
import BlueBtn from "../BlueBtn"; 
const Informations = ({movie, setWatchTrailer, currentUser, setNextMovie}) => {
    return (
        <div className='movie-info-container'>
               <h1 className='movie-title'>{movie.title}</h1>
               <p className='movie-tagline'>{movie.tagline}</p>
               <p className='movie-extra'>{movie.vote_average}/10 • 
               {movie.genres ? movie.genres.map((genre, index) => {
                    if(index === movie.genres.length - 1){
                    return genre.name ;
                  }
                  if(index === 0){
                    return " " + genre.name + ", ";
                  }
                  return genre.name + ", "; 
                  
               }) : null}</p>
               <p className='movie-overview'>{(movie.overview) ? movie.overview.slice(0, 200) + '...' : null}</p>
               <BlueBtn content={"Voir le trailer"} action={(e) => setWatchTrailer(true)}/>
               <WhiteBtn content={"Téléchager le film"}/>
               {(currentUser.admin) ? <BlueBtn content={"Modifier le prochain film"} action={(e) => setNextMovie(true)}/> : null}
        </div>
    );
};

export default Informations;
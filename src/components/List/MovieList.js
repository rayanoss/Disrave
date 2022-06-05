import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import {CgMoreO} from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

const MovieList = ({listMovies, handleClickMovieInfo, searchMovie, searchByCateogry, sorted}) => {
       const navigate = useNavigate(); 

       const MovieByFilter = () => {
            let filter = listMovies.filter(movie => {
                let searchBar = movie.original_title.toUpperCase().includes(searchMovie.toUpperCase()); 
                let category = movie.genre_ids.map(id => (id.toString() === searchByCateogry)).filter(el => (el)); 
            
                if (searchBar && searchByCateogry === ''){
                    return movie 
                }

                if (searchBar && category[0]){
                    return movie 
                }           
            })
           
            if (filter.length > 0 && sorted !== ""){
                if (sorted === "alphabet"){
                    filter.sort((a,b) => {
                        return (a.original_title < b.original_title) ? -1 :  (a.original_title > b.original_title) ? 1 : 0; 
                    })
                }
    
                if (sorted === "review-asc"){
                    filter.sort((a,b) => {
                        return (a.vote_average < b.vote_average) ? -1 :  (a.vote_average > b.vote_average) ? 1 : 0; 
                    })
                }
    
                if (sorted === "review-desc"){
                    filter.sort((a,b) => {
                        return (a.vote_average > b.vote_average) ? -1 :  (a.vote_average < b.vote_average) ? 1 : 0; 
                    })
                }
            }

            let array = filter.map((movie, index) => 
                <li key={movie.id} className="movie-item" onClick={() => navigate(`/film/${movie.id}`)}>   
                    <div className="image-container">
                    <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt="" />
                    <p className='movie-vote-average'><AiFillStar/> {movie.vote_average}</p>
                    <CgMoreO />
                    </div>
                    <p>{movie.original_title}</p>
                </li>    
            )
           return array
       }


    return (
        <>
            {MovieByFilter()}
        </>
    );
};

export default MovieList;
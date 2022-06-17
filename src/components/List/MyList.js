import React from 'react';
import MovieList from './MovieList';

const List = ({listMovies, searchMovie, searchByCateogry, sorted}) => {
    
    return (
            <ul className='list-movies'>
                <MovieList listMovies={listMovies} searchMovie={searchMovie} searchByCateogry={searchByCateogry} sorted={sorted}/>
            </ul>
    );
};

export default List;
import React, {useState, useEffect} from 'react';
import Filter from '../components/List/Filter';
import MyList from '../components/List/MyList';


import axios from 'axios';

const List = ({body}) => {
    const [listMovies, setListMovies] = useState([]); 
    const [searchMovie, setSearchMovie] = useState("")
    const [searchByCateogry, setSearchByCategory] = useState("")
    const [sorted, setSorted] = useState("")

    useEffect(() => {
        const fetchListMovies = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/account/1/watchlist/movies?sort_by=created_at.desc&api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR&session_id=4b4b981f7963e0b723f8d8f7350c2661e1727eed ")
            setListMovies(res.data.results)
        }  

      
        fetchListMovies()
    }, [])
    
    return (
        <div className='list-movies-section'>
            <header>
            <h1>Watchlist</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut aspernatur atque ipsam temporibus nesciunt itaque autem, amet rem repellat corrupti asperiores ad sint magnam ipsum eligendi quod exercitationem voluptas?</p>
            </header>
            <div className="filter-list-container">
            <Filter setSearchMovie={setSearchMovie} setSearchByCategory={setSearchByCategory} setSorted={setSorted}/>
            <MyList body={body} listMovies={listMovies} searchMovie={searchMovie} searchByCateogry={searchByCateogry} sorted={sorted}/>
            </div>
        </div>
    );
};

export default List;
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Select from 'react-select'; 

const customStyles = {
    menu: (provided, state) => ({
      color: '#f9f9f9', 
      background: '#222222',
      fontFamily: "Inter", 
      margin: "none", 
      padding: "none",
      position: "absolute", 
      width: "100%"
    }),

    singleValue: (provided, state) => ({
        ...provided, 
        color: '#f9f9f9', 
        
      }),

    control: (provided, state) => ({
        ...provided, 
        background: "#222222", 
        fontFamily: "Inter", 
        boxShadow: "none", 
        borderColor: "#f9f9f929", 
        borderRadius: "0px",
        "&:hover":{
            borderColor: "none"
        }, 
        height: "45px",
        cursor: "pointer"
        
    }), 

    option: (provided, state) => ({
        ...provided, 
        "&:hover": {
            background: "#303030",
            transition: "all 0.3s ease"
        }, 
        fontFamily: "Inter",
        background: "#222222",
        transition: "all 0.3s ease", 
       
    }), 

    valueContainer: (provided, state) => ({
        ...provided, 
        height: "100%"
       
    }), 

    placeholder: (provided, state) => ({
        ...provided, 
        height: "100%"
       
    }), 
  }
  

const Filter = ({setSearchMovie, setSearchByCategory, setSorted}) => {
    const [genres, setGenres] = useState(); 
    
    useEffect(() => {
        const fetchGenresMovie = async () => {
            const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=9abf0a996efeefc2cf9e9ab4f02bead8&language=fr-FR")
            let arrayFilter = []
            res.data.genres.map((genre) => arrayFilter.push({value: genre.id, label: genre.name}))
            setGenres(arrayFilter)
        }   
        fetchGenresMovie()
    }, [])

  
    const optionsSort = [
        {value: 'alphabet', label: "Ordre alphabétique"}, 
        {value: 'review-asc', label: "Avis croissant"}, 
        {value: 'review-desc', label: "Avis décroissant"}, 
    ]

    const handleSearchMovie = (e) => {
        setSearchMovie(e.target.value)
    }
    return (
        <div className='list-movie-user-input'>
            <p className='title'>Filtres</p>
            <input type="text" name="name" id="name" placeholder='Chercher un film' className='search-input' onChange={(e) => handleSearchMovie(e)}/>
            <Select 
                className='genres-select'
                styles={customStyles}
                options={genres}
                isSearchable={false}
                placeholder={"Sélectionner un genre"}
                onChange={(e) => setSearchByCategory(e.value.toString())}
            />
             <Select 
                className='sort-select'
                styles={customStyles}
                options={optionsSort}
                isSearchable={false}
                placeholder={"Trier par"}
                onChange={(e) => setSorted(e.value)}
            />
        </div> 
    );
};

export default Filter;
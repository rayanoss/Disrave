import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import BlueBtn from '../BlueBtn';
import { doc, setDoc, getDoc, collection, query, where, getDocs, deleteDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

const HeaderMovie = ({movie, movieId}) => {
    const {currentUser} = useContext(AuthContext)
    const [vote, setVote] = useState(0)
    const q = query(collection(db, "votes"), where("movieId", "==", movieId));

    const addVote = async () => {
        const snap = await getDoc(doc(db, 'votes', currentUser.uid))
        if (snap.data()) return console.log('vous avez déjà voté une fois')
        else{
            const docRef = await setDoc(doc(db, "votes", currentUser.uid), {
                vote: true, 
                movieId
             });
        }
    }

    const removeVote = async() => {
        await deleteDoc(doc(db, "votes", currentUser.uid))
    }

    useEffect(() => {
        const fetchVote = async () => {
            const data = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            data.push(doc.data())
            });
            setVote(data.length)
        }
        fetchVote()
    }, [])
    return (
        <>
            <div className="top-container">
            <img src={movie.backgroundPoster} alt="" className='background-poster'/>
                <div className="information-container">
                    <img src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + movie.poster_path} alt=""/>
                    <div className="text-container">
                        <p className='movie-title'>{movie.title}</p>
                        <ul className="list-genres">
                        {(movie.genres) ? movie.genres.map(genre => (
                            <li className="genre-item" key={genre.id}>{genre.name}</li>
                        )) : null}
                        </ul>
                        {movie.overview ? <p style={{fontSize: "14px"}}>{movie.overview}</p> : null}
                        <div className="vote-container">
                            <BlueBtn content={"-"} disable={currentUser ? false : true} action={removeVote}/>
                            <p>{vote}</p>
                            <BlueBtn content={"+"} disable={currentUser ? false : true} action={addVote}/>
                        </div>
                    </div>     
                </div>   
            </div>
        </>
    );
};

export default HeaderMovie;
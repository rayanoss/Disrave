import React, {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import BlueBtn from '../BlueBtn';
import {AiFillDelete} from 'react-icons/ai'; 
import {doc, deleteDoc} from "firebase/firestore";
import { db } from '../../firebase';

const MovieReview = ({setPostReview, review}) => {
    const {currentUser} = useContext(AuthContext)
   
    function getMinValue(){
        if (review.length !== 0){
            let noteArray = []
            review.forEach(rev => noteArray.push(rev.note))
            return Math.min(...noteArray)
        }
       else {
           return 0
       }
    }

    function getMaxValue(){
        if (review.length !== 0){
            let noteArray = []
            review.forEach(rev => noteArray.push(rev.note))
            return Math.max(...noteArray)
        }
       else {
           return 0
       }
    }

    function getAverage(){
        if (review.length !== 0){
            let total = 0; 
            let noteArray = []
            review.forEach(rev => noteArray.push(rev.note))
            noteArray.forEach(note => total += parseInt(note))
            return total / noteArray.length
        }
       else {
           return 0
       }
    }
    
    const deleteReview = async (i) => {
        await deleteDoc(doc(db, "review", review[i].docId));
    }
   
    
    return (
        <>
          <div className='review-container'>
           <h3>Avis Disrave</h3>
                <div className="top-review-container">
                    <div className="information-review">
                    <div className="value-review">
                        <p>{getAverage()}</p>
                    </div>
                    <div className="overview">
                    <p>Nombre d'avis: {review.length}</p>
                    <p>Pire note: {getMinValue()}</p>
                    <p>Meilleure note: {getMaxValue()}</p>
                    </div>
                    </div>
                    <BlueBtn content={"Ajouter un avis"} action={() => setPostReview(true)} disable={currentUser ? false : true}/>
                </div>

                <ul className='review-list'>
                    {review.map((rev, index) => (
                        <li key={index} className="review-item">
                            <div className="user-info">
                                {currentUser.admin ? <AiFillDelete onClick={() => deleteReview(index)}/> : null }
                                <img src={rev.photoURL} alt="" />
                                <div className="name-note">
                                    <p>{rev.username}</p>
                                    <p>Note: {rev.note}/10</p>
                                </div>    
                            </div>

                            <p>{rev.review}</p>
                        </li>
                    ))}
                </ul>
           </div>   
        </>
    );
};

export default MovieReview;
import React, {useContext, useState} from 'react';
import BlueBtn from '../BlueBtn';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { AuthContext } from '../../context/AuthContext';
import {AiOutlineStar} from 'react-icons/ai'
import {BsChatRightText} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'
const ReviewModal = ({setPostReview, movieId}) => {
    const [number, setNumber] = useState(null)
    const [textReview, setTextReview] = useState("")
    const {currentUser} = useContext(AuthContext)
    
    const postReview = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "review"), {
            id: movieId, 
            review: textReview,
            note: number,
            username: currentUser.displayName, 
            photoURL: currentUser.photoURL
        });

    }

    return (
        <>
            <div className='post-container'>
            <div className="post-background" onClick={() => setPostReview(false)}>
            </div>
            <form>
            <div className="header-form">
                <FaDiscord className='form-logo'/>
                <h3 className='connexion-title'>Prochain film</h3>
                <p>Modifier le prochain film en y ajouter le nouveau ID et le nouveau lien de téléchargement</p>
                </div> 
                <div className="user-input">
                <div className="email">
                <input type="number" name="" id="" max={10} min={0} placeholder={'Sélectionner une note entre 0 et 10'} onChange={(e) => setNumber(e.target.value)}/>
                <AiOutlineStar />
                </div> 
                <div className="password">
                <textarea name="" id="" cols="70" rows="15" placeholder='Entrer votre avis..' onChange={(e) => setTextReview(e.target.value)}></textarea>
                <BsChatRightText style={{position: 'absolute', top: "12%"}} />  
                </div>    
                <BlueBtn content={"Publier l'avis"} action={(e) => postReview(e)}/>
            </div>
            </form>
            </div>
        </>
    );
};

export default ReviewModal;
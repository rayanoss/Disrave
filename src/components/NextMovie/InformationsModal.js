import React, {useState} from 'react';
import BlueBtn from '../BlueBtn';
import { db } from '../../firebase';
import { setDoc, doc } from "firebase/firestore"; 
import {MdDriveFileRenameOutline} from 'react-icons/md'; 
import {AiOutlineLink} from 'react-icons/ai'; 
import {FaDiscord} from 'react-icons/fa'; 

const InformationsModal = ({setNextMovie, currentMovieId}) => {
    const [movieId, setMovieId] = useState(currentMovieId || '');
    const [downloadLink, setDownloadLink] = useState('')
    console.log(movieId)
    const postNextMovie = async (e) => {
        e.preventDefault();
        const docRef = await setDoc(doc(db, "nextMovie", "0"), {
            movieId, 
            downloadLink
        });
        console.log(docRef)
    }

    return (
        <div className='next-movie-modal-container'>
            <div className="post-background" onClick={() => setNextMovie(false)}></div>
            <form>
            <div className="header-form">
                <FaDiscord className='form-logo'/>
                <h3 className='connexion-title'>Prochain film</h3>
                <p>Modifier le prochain film en y ajouter le nouveau ID et le nouveau lien de téléchargement</p>
                </div> 
                <div className="user-input">
                <div className="email">
                <input type="text" name="" id="" placeholder='Id du film' onChange={(e) => setMovieId(e.target.value)} value={currentMovieId}/>  
                <MdDriveFileRenameOutline />
                </div> 
                <div className="password">
                <input type="text" name="" id="" placeholder='Lien du film' onChange={(e) => setDownloadLink(e.target.value)}/>  
                <AiOutlineLink />  
                </div>    
                <BlueBtn content={"Changer le prochain film"} action={(e) => postNextMovie(e)}/>
            </div>
            </form>
        </div>
    );
};

export default InformationsModal;
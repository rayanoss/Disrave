import React, {useState, useEffect, useContext} from 'react';
import {AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineFileImage} from 'react-icons/ai'; 
import {FaDiscord} from 'react-icons/fa'; 
import BlueBtn from '../BlueBtn';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import {auth, db, storage} from '../../firebase';
import {signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Register = ({setRegister}) => {
    const [data, setData] = useState({});
    const [file, setFile] = useState("")
    const navigate = useNavigate(); 
    const {dispatch, currentUser} = useContext(AuthContext); 
    
 
    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name)
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                    default: 
                    break; 
                }
            }, 
            (error) => {
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData((prev) => ({...prev, img: downloadURL}))
                });
            }
            );
        }
        file && uploadFile(); 
    }, [file])

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: "LOGIN", payload: user})
                navigate(-1)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(auth.currentUser, {
                displayName: data.username,
                photoURL: data.img
            })
            handleLogin(e);
            
        } catch (error) {
            console.log(error)
        } 
    }

    return (
        <form>
            <div className="header-form register">
            <FaDiscord className='form-logo'/>
            <h3 className='connexion-title'>S'enregistrer</h3>
            <p>Créer votre compte disrave afin de pleinement profiter des fonctionnalités</p>
            </div>
        
            <div className="user-input">
            <div className="username">
            <input type="text" name="username" id="username" placeholder="Nom d'utilisateur" onChange={(e) => setData({...data, username: e.target.value})}/>       
            <AiOutlineUser />
            </div>

            <div className="email">
            <input type="email" name="email" id="email" placeholder='Adresse email'  onChange={(e) => setData({...data, email: e.target.value})}/>       
            <AiOutlineMail />
            </div>

            <div className="password">
            <input type="password" name="password" id="password" placeholder='Mot de passe' onChange={(e) => setData({...data, password: e.target.value})}/>    
            <AiOutlineLock />  
            </div>   

            <div className="pp">
            <label htmlFor="files">Photo de profil</label>
            <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>   
            <AiOutlineFileImage />  
            </div>    

            <BlueBtn content={"S'enregistrer"} action={(e) => handleRegister(e)} />
            <p onClick={() => setRegister(false)}>Vous avez un compte ? Connectez-vous!</p>
            </div>
        </form>
    );
};

export default Register;
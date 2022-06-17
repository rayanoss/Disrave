import React, {useContext, useState} from 'react';
import {AiOutlineMail, AiOutlineLock} from 'react-icons/ai'; 
import {FaDiscord} from 'react-icons/fa'; 
import BlueBtn from '../BlueBtn';
import { auth } from '../../firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';


const Login = ({setRegister}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 
    const {dispatch, currentUser} = useContext(AuthContext); 

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: "LOGIN", payload: user})
                
            })
            .catch((error) => {
                
            });
    }
            
    return (
       <form>
            <div className="header-form connexion">
                <FaDiscord className='form-logo'/>
                <h3 className='connexion-title'>Se connecter</h3>
                <p>Créer votre compte disrave afin de pleinement profiter des fonctionnalités</p>
                </div>
              
                <div className="user-input">
                <div className="email">
                <input type="email" name="" id="" placeholder='Entrer votre email' onChange={(e) => setEmail(e.target.value)}/>  
                <AiOutlineMail />
                </div> 
                <div className="password">
                <input type="password" name="" id="" placeholder='Entrer votre mot de passe' onChange={(e) => setPassword(e.target.value)}/>  
                <AiOutlineLock />  
                </div>    
                <BlueBtn content={"Se connecter"} action={(e) => handleLogin(e)} />
                <p onClick={() => setRegister(true)}>Vous n'avez pas de compte ? Enregistrez-vous!</p>
            </div>
       </form>
    );
};

export default Login;
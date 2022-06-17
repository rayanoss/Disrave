import React, {useState} from 'react';
import Register from '../components/Connexion/Register';
import Login from '../components/Connexion/Login';


const Connexion = () => {
    const [register, setRegister] = useState(false);
  
    
    return (
        <section className='connexion-container'>
            <div className="connexion-features">
            </div>
            {register ? <Register setRegister={setRegister}/> : <Login setRegister={setRegister} />}
        </section>
    );
};

export default Connexion;
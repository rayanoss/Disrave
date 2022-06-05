import React from 'react';
import bg from '../asset/movies-list.jpg';
import BlueBtn from '../components/BlueBtn';
const Request = () => {
    return (
        <section className='movie-request-section'>
            <div className="request-text">
            <h1>Il manque ton film favoris ?</h1>
            <p style={{color: "white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa neque eos a voluptatibus, saepe officia alias magnam fugit ipsum fugiat corporis voluptatum architecto obcaecati illo impedit eius culpa veniam.</p>
            </div>
            <img src={bg} alt="" className='img-bg'/>
            <form action="">
                <div className="input-list">
                <input type="text" name="" id="" placeholder='Nom du film'/>
                <input type="text" name="" id="" placeholder='Pseudo'/>
                <input type="text" name="" id="" placeholder='Lien du trailer'/>
                <BlueBtn content={"Envoyer"}/>
                </div>
            </form>
        </section>
    );
};

export default Request;